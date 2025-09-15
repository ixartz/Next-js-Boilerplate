'use client';

import { motion } from 'framer-motion';

export default function ReferencesPageContent() {
  return (
    <div className="flex items-center justify-between">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold tracking-tight"
      >
        References
      </motion.h1>
    </div>
  );
}
