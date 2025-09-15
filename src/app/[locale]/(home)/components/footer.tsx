import Link from 'next/link';
import { Logo } from '@/components/logo';

import { ThemeSwitch } from '@/components/theme-switch';
import { Separator } from '@/components/ui/components/separator';

export const Footer = () => (
  <footer className="bg-background">
    <Separator />

    <div className="container grid py-12 sm:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col gap-y-2">
        <Logo size={96} className="-ml-2" />

        <h2 className="text-xl font-medium">Reactive Resume</h2>

        <p className="prose prose-sm prose-zinc dark:prose-invert leading-relaxed opacity-60">
          A free and open-source resume builder that simplifies the process of creating, updating, and sharing your resume.
        </p>

      </div>

      <div className="relative col-start-4 flex flex-col items-end justify-end">
        <div className="mb-14 space-y-6 text-right">
          <a
            className="block"
            href="https://www.digitalocean.com/?utm_medium=opensource&utm_source=Reactive-Resume"
          >
            <img
              src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_black.svg"
              alt="Powered by DigitalOcean"
              className="block dark:hidden"
              width="150px"
            />
            <img
              src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_white.svg"
              alt="Powered by DigitalOcean"
              className="hidden dark:block"
              width="150px"
            />
          </a>

          <Link
            href="#"
            className="block text-sm font-medium"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="absolute right-0 bottom-0 lg:space-x-2">
          <ThemeSwitch />
        </div>
      </div>
    </div>
  </footer>
);
