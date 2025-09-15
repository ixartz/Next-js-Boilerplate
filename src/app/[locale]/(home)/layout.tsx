import { ScrollArea } from '@/components/ui/components/scroll-area';

import { Footer } from './components/footer';
import { Header } from './components/header';

export default async function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea orientation="vertical" className="h-screen">
      <Header />
      {children}
      <Footer />
    </ScrollArea>
  );
}
