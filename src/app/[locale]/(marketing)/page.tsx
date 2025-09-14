import type { Metadata } from 'next';
// import { ThemeToggle } from "@/components/theme-toggle"
import { Clock, QrCode, Shield, Users } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
// import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Index',
  // });

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">QueueFlow</h1>
            </div>
            {/* <ThemeToggle /> */}
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-black">Smart Queue Management Made Simple</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-pretty text-muted-foreground">
              Streamline your business operations with our professional queue management system. Reduce wait times,
              improve customer satisfaction, and boost efficiency.
            </p>
          </div>

          {/* Main Action Cards */}
          <div className="mx-auto mb-16 grid max-w-4xl gap-6 md:grid-cols-2">
            <Card className="border-2 transition-colors hover:border-primary/50">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Join Queue</CardTitle>
                <CardDescription className="text-base">Scan QR code or enter queue code to join the line</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* <Button asChild className="w-full">
                  <Link href="/join">Join Queue</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="border-2 transition-colors hover:border-accent/50">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Create Queue</CardTitle>
                <CardDescription className="text-base">Set up a new queue for your business or event</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* <Button asChild className="w-full">
                  <Link href="/create">Create Queue</Link>
                </Button> */}
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Real-time Updates</h3>
              <p className="text-muted-foreground">Get live queue status and estimated wait times</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">QR Code Integration</h3>
              <p className="text-muted-foreground">Easy joining with QR code scanning or manual entry</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Reliable & Secure</h3>
              <p className="text-muted-foreground">Professional-grade system with data persistence</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t border-border">
          <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
            <p>&copy; 2024 QueueFlow. Professional queue management system.</p>
          </div>
        </footer>
      </div>
    </>
  );
};
