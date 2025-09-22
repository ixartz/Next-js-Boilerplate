'use client';

import { motion } from 'framer-motion';
import React from 'react';
import UploadForm from './_components/upload-form';

export default function AnalyzePageContent() {
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

      {/* Upload Form */}
      <UploadForm />
    </div>
  );
}
