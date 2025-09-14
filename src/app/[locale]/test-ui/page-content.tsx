import { Button } from '@/components/ui';

export default function TestUIContent() {
  return (
    <div className="mx-auto max-w-4xl space-y-4 p-8">
      <h1 className="mb-6 text-3xl font-bold">Demo of Next.js Boilerplate</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
          <Button size="icon">🎯</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Animations Demo</h2>
        <div className="flex flex-wrap items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full bg-primary"></div>
          <div className="h-8 w-8 animate-ping rounded-full bg-secondary"></div>
          <div className="bg-success h-8 w-8 animate-pulse rounded-full"></div>
          <div className="bg-error h-8 w-8 animate-bounce rounded-full"></div>
        </div>
        <p className="text-sm text-zinc-500">
          Spin • Ping • Pulse • Bounce animations
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Color Palette</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Status Colors</h3>
            <div className="flex gap-2">
              <div className="bg-success h-8 w-8 rounded" title="Success"></div>
              <div className="bg-error h-8 w-8 rounded" title="Error"></div>
              <div className="bg-warning h-8 w-8 rounded" title="Warning"></div>
              <div className="bg-info h-8 w-8 rounded" title="Info"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Zinc Palette</h3>
            <div className="flex gap-1">
              <div className="h-8 w-4 rounded-sm bg-zinc-200" title="zinc-200"></div>
              <div className="h-8 w-4 rounded-sm bg-zinc-400" title="zinc-400"></div>
              <div className="h-8 w-4 rounded-sm bg-zinc-600" title="zinc-600"></div>
              <div className="h-8 w-4 rounded-sm bg-zinc-800" title="zinc-800"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Emerald Palette</h3>
            <div className="flex gap-1">
              <div className="h-8 w-4 rounded-sm bg-emerald-200" title="emerald-200"></div>
              <div className="h-8 w-4 rounded-sm bg-emerald-400" title="emerald-400"></div>
              <div className="h-8 w-4 rounded-sm bg-emerald-600" title="emerald-600"></div>
              <div className="h-8 w-4 rounded-sm bg-emerald-800" title="emerald-800"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Rose Palette</h3>
            <div className="flex gap-1">
              <div className="h-8 w-4 rounded-sm bg-rose-200" title="rose-200"></div>
              <div className="h-8 w-4 rounded-sm bg-rose-400" title="rose-400"></div>
              <div className="h-8 w-4 rounded-sm bg-rose-600" title="rose-600"></div>
              <div className="h-8 w-4 rounded-sm bg-rose-800" title="rose-800"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Amber Palette</h3>
            <div className="flex gap-1">
              <div className="h-8 w-4 rounded-sm bg-amber-200" title="amber-200"></div>
              <div className="h-8 w-4 rounded-sm bg-amber-400" title="amber-400"></div>
              <div className="h-8 w-4 rounded-sm bg-amber-600" title="amber-600"></div>
              <div className="h-8 w-4 rounded-sm bg-amber-800" title="amber-800"></div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Sky Palette</h3>
            <div className="flex gap-1">
              <div className="h-8 w-4 rounded-sm bg-sky-200" title="sky-200"></div>
              <div className="h-8 w-4 rounded-sm bg-sky-400" title="sky-400"></div>
              <div className="h-8 w-4 rounded-sm bg-sky-600" title="sky-600"></div>
              <div className="h-8 w-4 rounded-sm bg-sky-800" title="sky-800"></div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Full Color Scale Test</h3>
          <div className="space-y-3">
            <div>
              <h4 className="mb-2 text-sm font-medium">Zinc Scale</h4>
              <div className="flex gap-1">
                <div className="h-8 w-8 rounded-sm border bg-zinc-50" title="50"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-100" title="100"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-200" title="200"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-300" title="300"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-400" title="400"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-500" title="500"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-600" title="600"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-700" title="700"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-800" title="800"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-900" title="900"></div>
                <div className="h-8 w-8 rounded-sm bg-zinc-950" title="950"></div>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium">Emerald Scale</h4>
              <div className="flex gap-1">
                <div className="h-8 w-8 rounded-sm border bg-emerald-50" title="50"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-100" title="100"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-200" title="200"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-300" title="300"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-400" title="400"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-500" title="500"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-600" title="600"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-700" title="700"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-800" title="800"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-900" title="900"></div>
                <div className="h-8 w-8 rounded-sm bg-emerald-950" title="950"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
