'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FloppyDisk, Image as ImageIcon, Upload } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui';
import { FILE_UPLOAD_CONSTANTS, uploadFileSchema } from '@/schemas/upload';
import { useUserProfile } from '@/services';
import { useFindProductSpecifications } from '@/services/ai/find-product-specifications';
import useCreateAnalysis from '@/services/analysis/create';
import { cn } from '@/utils';
import Analysis from './analysis';

export default function UploadForm() {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [showUploadForm, setShowUploadForm] = useState(true);

  // API hook
  const { data: user } = useUserProfile();
  const { mutateAsync: findProductSpecs, loading } = useFindProductSpecifications();
  const { createAnalysis, isPending: createAnalysisLoading } = useCreateAnalysis();

  // React Hook Form setup
  const {
    setValue,
    watch,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(uploadFileSchema),
    defaultValues: {
      image_file: undefined,
      claudeStream: true,
    },
  });

  const uploadedFile = watch('image_file');

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleFileSelect = useCallback((file: File) => {
    setValue('image_file', file, { shouldValidate: true });

    // Tạo preview URL cho hình ảnh
    if (file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, [setValue]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  const handleRemoveFile = useCallback(() => {
    setValue('image_file', undefined, { shouldValidate: true });
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    // Reset file input
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }, [setValue, previewUrl]);

  const onSubmit = async (data: any) => {
    try {
      const result = await findProductSpecs({
        image_file: data.image_file,
        claudeStream: data.claudeStream,
      });

      console.warn('Product specifications found:', result);
      setAnalysisResult(result);
      setShowUploadForm(false); // Hide upload form after successful analysis
    } catch (error) {
      console.error('Analysis error:', error);
      // TODO: Replace with proper toast notification
      console.error('Analysis failed. Please try again.');
    }
  };

  const handleNewAnalysis = () => {
    setAnalysisResult(null);
    setShowUploadForm(true);
    setPreviewUrl(null);
    // Reset form
    setValue('image_file', undefined, { shouldValidate: false });
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleSaveAnalysis = () => {
    const { product_data } = analysisResult;
    const { data_sources, product_information, product_specifications } = product_data;
    const data = {
      ...product_information,
      user_id: user?.id,
      data_sources,
      product_specifications,
    };

    createAnalysis(data);
  };

  return (
    <div className="space-y-8">
      {/* Upload Form */}
      {showUploadForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(
              'rounded-xl border-2 border-dashed bg-zinc-50 p-12',
              errors.image_file ? 'border-red-300 bg-red-50' : 'border-zinc-200',
            )}
            >
              <div className="space-y-6 text-center">
                {/* Upload Icon */}
                <div className="mx-auto">
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg">
                    <ImageIcon size={32} className="text-white" weight="duotone" />
                    <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500"></div>
                    </div>
                  </div>
                </div>

                {/* Upload Text */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Upload Product Image
                  </h3>
                  <p className="text-zinc-600">
                    Drop an image here or choose from your device for our AI-powered analysis
                  </p>
                </div>

                {/* Drop Zone */}
                <div
                  className={cn(
                    'relative rounded-lg border-2 border-dashed border-zinc-300 p-8 transition-colors',
                    dragActive && 'border-sky-500 bg-sky-50',
                    'hover:border-zinc-400',
                  )}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                    id="file-upload"
                  />

                  {uploadedFile
                    ? (
                        <div className="space-y-4">
                          <div className="relative mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg bg-zinc-100">
                            {previewUrl
                              ? (
                                  <Image
                                    src={previewUrl}
                                    alt="Preview"
                                    fill
                                    className="object-cover"
                                  />
                                )
                              : (
                                  <ImageIcon size={48} className="text-zinc-400" />
                                )}
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm text-zinc-600">
                              {uploadedFile.name}
                            </p>
                            <p className="text-xs text-zinc-500">
                              {(uploadedFile.size / 1024 / 1024).toFixed(2)}
                              {' '}
                              MB
                            </p>
                            <Button
                              type="button"
                              variant="secondary"
                              size="sm"
                              onClick={handleRemoveFile}
                              className="mt-2"
                            >
                              Remove file
                            </Button>
                          </div>
                        </div>
                      )
                    : (
                        <div className="space-y-4">
                          <Upload size={48} className="mx-auto text-zinc-400" />
                          <p className="text-zinc-600">
                            Drop your image here or click to upload
                          </p>
                        </div>
                      )}
                </div>

                {/* Error Message */}
                {errors.image_file && (
                  <div className="rounded-lg bg-red-100 p-3 text-sm text-red-700">
                    {typeof errors.image_file.message === 'string' ? errors.image_file.message : 'There was an error with the file'}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  {!uploadedFile
                    ? (
                        <Button
                          type="button"
                          size="lg"
                          className="bg-zinc-900 px-8 text-white hover:bg-zinc-800"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <Upload size={20} className="mr-2" />
                          Choose File
                        </Button>
                      )
                    : (
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-gradient-to-r from-sky-500 to-emerald-500 px-8 text-white hover:from-sky-600 hover:to-emerald-600"
                          disabled={isSubmitting || loading}
                        >
                          {(isSubmitting || loading) ? 'Analyzing...' : 'Analyze Product'}
                        </Button>
                      )}
                </div>

                {/* Supported Formats */}
                <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
                  <ImageIcon size={16} />
                  <span>
                    Supports JPG, PNG, WebP (max
                    {FILE_UPLOAD_CONSTANTS.MAX_FILE_SIZE_MB}
                    MB)
                  </span>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      )}

      {/* Analysis Results */}
      {analysisResult && (
        <div className="space-y-6">
          {/* New Analysis Button */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleNewAnalysis}
              variant="primary"
              size="lg"
              className="px-8"
            >
              <Upload size={20} className="mr-2" />
              New Analysis
            </Button>
            <Button
              onClick={handleSaveAnalysis}
              variant="secondary"
              size="lg"
              className="px-8"
              disabled={createAnalysisLoading}
            >
              <FloppyDisk size={20} className="mr-2" />
              Save Analysis
            </Button>
          </div>

          <Analysis result={analysisResult} />
        </div>
      )}
    </div>
  );
}
