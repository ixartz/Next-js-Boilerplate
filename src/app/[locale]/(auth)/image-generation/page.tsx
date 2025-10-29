import ImageGeneration from '@/components/ImageGeneration';

export default function ImageGenerationPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          AI Image Generation
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Create stunning images with AI. Choose your style, quality, and let our AI bring your imagination to life.
        </p>
      </div>

      <ImageGeneration />
    </div>
  );
}
