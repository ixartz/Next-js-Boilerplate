import Link from 'next/link';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 opacity-20"></div>
          <div className="animation-delay-2000 absolute -bottom-40 -left-32 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-rose-400 to-amber-500 opacity-20"></div>
          <div className="animate-spin-slow absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-sky-400 to-emerald-500 opacity-10"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Transform Your Product Strategy with
                {' '}
                <span className="animate-gradient-x bg-gradient-to-r from-emerald-500 via-sky-500 to-rose-500 bg-clip-text text-transparent">
                  ProductLens AI
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Harness the power of artificial intelligence to analyze market trends,
                understand customer needs, and make data-driven product decisions that drive growth.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-600 mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="transform border-0 bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-emerald-600 hover:to-sky-600 hover:shadow-xl" asChild>
                <Link href="/apps">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-sky-500 text-sky-600 transition-all duration-300 hover:scale-105 hover:bg-sky-500 hover:text-white" asChild>
                <Link href="#">Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary/10 via-secondary/20 to-secondary/10 py-24">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="animation-delay-1000 absolute top-20 left-10 h-32 w-32 animate-bounce rounded-full bg-gradient-to-r from-emerald-300 to-sky-300 opacity-30"></div>
          <div className="animation-delay-2000 absolute right-10 bottom-20 h-24 w-24 animate-bounce rounded-full bg-gradient-to-r from-rose-300 to-amber-300 opacity-30"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
            <h2 className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Everything you need to build better products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our AI-powered platform provides comprehensive insights to help you make informed product decisions.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group animate-fade-in-up animation-delay-300 flex flex-col transition-all duration-500 hover:scale-105">
                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-sky-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-foreground">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-transform duration-300 group-hover:scale-110">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    Market Intelligence
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      Get real-time insights into market trends, competitor analysis, and emerging opportunities
                      to stay ahead of the curve.
                    </p>
                  </dd>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group animate-fade-in-up animation-delay-600 flex flex-col transition-all duration-500 hover:scale-105">
                <div className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-rose-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-foreground">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-rose-500 transition-transform duration-300 group-hover:scale-110">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    Customer Insights
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      Understand your customers' needs, preferences, and pain points through advanced
                      sentiment analysis and behavioral data.
                    </p>
                  </dd>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group animate-fade-in-up animation-delay-900 flex flex-col transition-all duration-500 hover:scale-105">
                <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-amber-50 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-foreground">
                    <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-amber-500 transition-transform duration-300 group-hover:scale-110">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                    Predictive Analytics
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">
                      Leverage machine learning to predict product performance, identify risks,
                      and optimize your product roadmap.
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/5 py-24">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="animate-float absolute top-10 left-1/4 h-20 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 opacity-20"></div>
          <div className="animate-float animation-delay-1000 absolute right-1/4 bottom-10 h-16 w-16 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 opacity-20"></div>
          <div className="animate-float animation-delay-2000 absolute top-1/2 left-10 h-12 w-12 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 opacity-20"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="animate-fade-in-up text-center">
              <h2 className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Trusted by product teams worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Join thousands of product managers who rely on ProductLens AI for strategic decisions.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-4 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="group animate-fade-in-up animation-delay-300 flex flex-col rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-sky-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <dt className="text-sm leading-6 font-semibold text-emerald-600">Companies</dt>
                <dd className="order-first bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent transition-transform duration-300 group-hover:scale-110">2,500+</dd>
              </div>
              <div className="group animate-fade-in-up animation-delay-600 flex flex-col rounded-xl border border-sky-100 bg-gradient-to-br from-sky-50 to-rose-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <dt className="text-sm leading-6 font-semibold text-sky-600">Product Insights</dt>
                <dd className="order-first bg-gradient-to-r from-sky-600 to-rose-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent transition-transform duration-300 group-hover:scale-110">1M+</dd>
              </div>
              <div className="group animate-fade-in-up animation-delay-900 flex flex-col rounded-xl border border-rose-100 bg-gradient-to-br from-rose-50 to-amber-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <dt className="text-sm leading-6 font-semibold text-rose-600">Time Saved</dt>
                <dd className="order-first bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent transition-transform duration-300 group-hover:scale-110">40%</dd>
              </div>
              <div className="group animate-fade-in-up animation-delay-1200 flex flex-col rounded-xl border border-amber-100 bg-gradient-to-br from-amber-50 to-emerald-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <dt className="text-sm leading-6 font-semibold text-amber-600">Success Rate</dt>
                <dd className="order-first bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent transition-transform duration-300 group-hover:scale-110">95%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-sky-600 to-rose-600">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="animate-gradient-x absolute top-0 left-0 h-full w-full bg-gradient-to-r from-emerald-600/50 via-sky-600/50 to-rose-600/50"></div>
          <div className="absolute -top-24 -right-24 h-48 w-48 animate-pulse rounded-full bg-white/10"></div>
          <div className="animation-delay-1000 absolute -bottom-24 -left-24 h-64 w-64 animate-pulse rounded-full bg-white/5"></div>
          <div className="animate-spin-slow absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/5"></div>
        </div>

        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to revolutionize your product strategy?
              </h2>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
                Start making smarter product decisions today with ProductLens AI.
                Join thousands of product teams already using our platform.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-600 mt-10 flex items-center justify-center gap-x-6">
              <Button
                variant="secondary"
                size="lg"
                className="transform bg-white font-semibold text-emerald-600 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-xl"
                asChild
              >
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border-2 border-white/30 text-white transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
