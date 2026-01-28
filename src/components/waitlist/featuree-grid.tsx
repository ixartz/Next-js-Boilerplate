import { BarChart3, FileCheck, Share2, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: FileCheck,
    title: 'Collect Proof',
    description: 'Easily request and collect testimonials, reviews, and case studies from your clients.',
  },
  {
    icon: Share2,
    title: 'Share Everywhere',
    description: 'Embed social proof on your website, landing pages, and marketing materials.',
  },
  {
    icon: BarChart3,
    title: 'Track Performance',
    description: 'Measure the impact of your testimonials with detailed analytics and insights.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your client data is encrypted and protected with enterprise-grade security.',
  },
];

export function FeaturesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {features.map(feature => (
        <Card
          key={feature.title}
          className="transition-colors hover:border-accent/30"
        >
          <CardHeader className="pb-2">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <feature.icon className="h-5 w-5 text-foreground" />
            </div>
            <CardTitle className="text-base">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
