'use client';

import {
  ArrowRight,
  BookOpen,
  ChartLine,
  ClockCounterClockwise,
  FileText,
  MagnifyingGlass,
  Sparkle,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui';

const apps = [
  {
    id: 'analyze',
    title: 'Analyze',
    description: 'AI-powered product analysis for sustainability insights, environmental impact assessment, and compliance verification.',
    icon: MagnifyingGlass,
    color: 'from-sky-500 to-emerald-500',
    features: ['LCA Analysis', 'Environmental Indicators', 'Risk Assessment', 'Supply Chain Mapping'],
    href: '/apps/analyze',
  },
  {
    id: 'history',
    title: 'History',
    description: 'Track and review your previous analyses, compare results over time, and monitor improvement trends.',
    icon: ClockCounterClockwise,
    color: 'from-purple-500 to-pink-500',
    features: ['Analysis Timeline', 'Progress Tracking', 'Comparison Tools', 'Export Reports'],
    href: '/apps/history',
  },
  {
    id: 'references',
    title: 'References',
    description: 'Access comprehensive databases, industry standards, and regulatory frameworks for informed decision-making.',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-500',
    features: ['Industry Standards', 'Regulatory Database', 'Best Practices', 'Documentation'],
    href: '/apps/references',
  },
];

export default function Apps() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg">
          <Sparkle size={32} className="text-white" weight="duotone" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Product Intelligence Suite
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600">
            Comprehensive AI-powered tools for product sustainability analysis,
            compliance verification, and environmental impact assessment
          </p>
        </div>
      </motion.div>

      {/* Apps Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, index) => {
          const IconComponent = app.icon;

          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-zinc-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 transition-opacity group-hover:opacity-5`} />

              {/* Content */}
              <div className="relative flex h-full flex-col space-y-6">
                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${app.color} shadow-lg`}>
                  <IconComponent size={28} className="text-white" weight="duotone" />
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {app.title}
                  </h3>
                  <p className="leading-relaxed text-zinc-600">
                    {app.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-3">
                  <h4 className="text-sm font-medium tracking-wide text-zinc-800 uppercase">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {app.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-zinc-600">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${app.color}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    className="w-full transition-all group-hover:shadow-md"
                    size="lg"
                  >
                    <Link href={app.href}>
                      Open
                      {' '}
                      {app.title}
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-zinc-50 to-zinc-100 p-8"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground">
              <ChartLine size={32} className="text-sky-500" />
              99.9%
            </div>
            <p className="mt-2 text-sm text-zinc-600">Analysis Accuracy</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground">
              <Sparkle size={32} className="text-emerald-500" />
              10K+
            </div>
            <p className="mt-2 text-sm text-zinc-600">Products Analyzed</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-3xl font-bold text-foreground">
              <FileText size={32} className="text-amber-500" />
              500+
            </div>
            <p className="mt-2 text-sm text-zinc-600">Industry Standards</p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 p-8 text-center text-white"
      >
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Ready to Transform Your Product Analysis?
          </h2>
          <p className="mx-auto max-w-2xl text-sky-100">
            Start with our AI-powered analysis tool to get instant insights into your product's
            environmental impact and sustainability metrics.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-sky-600 shadow-lg hover:bg-zinc-50"
          >
            <Link href="/apps/analyze">
              Start Analysis
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
