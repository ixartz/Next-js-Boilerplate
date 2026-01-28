import { FileCheck } from 'lucide-react';
import { FeaturesGrid } from '@/components/waitlist/featuree-grid';
import { WaitlistWrapper } from '@/components/waitlist/waitlist-wrapper';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <FileCheck className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Client Proof</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Coming Soon
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl lg:text-6xl">
              Collect client proof that converts
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-pretty text-muted-foreground">
              The easiest way to gather, manage, and showcase testimonials, reviews, and case studies from your happiest clients. Turn social proof into your best marketing asset.
            </p>
            {/*
            // Stats
            <div className="mt-4 flex gap-8 border-t border-border pt-6">
              <div>
                <div className="text-2xl font-bold text-foreground">2,500+</div>
                <div className="text-sm text-muted-foreground">Early signups</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Q1 2026</div>
                <div className="text-sm text-muted-foreground">Expected launch</div>
              </div>
            </div> */}
          </div>

          {/* Right Column - Form */}
          <div className="lg:pt-4">
            <WaitlistWrapper />
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-24 md:mt-32">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Everything you need to collect proof
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              A complete toolkit for gathering and displaying client testimonials that build trust and drive conversions.
            </p>
          </div>
          <FeaturesGrid />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FileCheck className="h-4 w-4" />
            <span>ClientProof</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; 2026 ClientProof. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
