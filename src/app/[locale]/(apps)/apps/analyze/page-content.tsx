'use client';

import { Camera, Image as ImageIcon, Upload } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/utils';

export default function AnalyzePageContent() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setUploadedFile(file);
      }
    }
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setUploadedFile(file);
      }
    }
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          AI-Product Sustainability & Intelligence
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-zinc-600">
          LCA | Environmental Indicators & Risks | Target Setting & Decarbonisation |
          Trade Compliance & Supply-Chain Mapping
        </p>
      </motion.div>

      {/* Upload Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-2xl"
      >
        <div className="rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50 p-12">
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
                      <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-lg bg-zinc-100">
                        <ImageIcon size={48} className="text-zinc-400" />
                      </div>
                      <p className="text-sm text-zinc-600">
                        {uploadedFile.name}
                      </p>
                    </div>
                  )
                : (
                    <div className="space-y-4">
                      <Upload size={48} className="mx-auto text-zinc-400" />
                      <p className="text-zinc-600">
                        Drag and drop your image here
                      </p>
                    </div>
                  )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-zinc-900 px-8 text-white hover:bg-zinc-800"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <Upload size={20} className="mr-2" />
                Choose File
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="px-8"
              >
                <Camera size={20} className="mr-2" />
                Take Photo
              </Button>
            </div>

            {/* Supported Formats */}
            <div className="flex items-center justify-center gap-2 text-sm text-zinc-500">
              <ImageIcon size={16} />
              <span>Supports JPG, PNG, WebP formats</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
