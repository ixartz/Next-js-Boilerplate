import { Sparkle } from '@phosphor-icons/react';
import Link from 'next/link';
import { cn } from '@/utils';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  href?: string;
};

const sizeConfig = {
  sm: {
    icon: 'h-8 w-8',
    sparkle: 16,
    title: 'text-sm font-bold',
    subtitle: 'text-xs',
  },
  md: {
    icon: 'h-12 w-12',
    sparkle: 24,
    title: 'text-lg font-bold',
    subtitle: 'text-sm',
  },
  lg: {
    icon: 'h-16 w-16',
    sparkle: 32,
    title: 'text-2xl font-bold',
    subtitle: 'text-base',
  },
};

export const Logo = ({
  size = 'md',
  showText = true,
  className,
  href = '/',
}: LogoProps) => {
  const config = sizeConfig[size] || sizeConfig.md;

  const logoContent = (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn(
        'flex items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg',
        config.icon,
      )}
      >
        <Sparkle size={config.sparkle} className="text-white" weight="duotone" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className={cn(config.title, 'text-foreground leading-tight')}>
            ProductLens
          </div>
          <div className={cn(config.subtitle, 'text-zinc-500 leading-tight')}>
            Product Intelligence
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-80">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
