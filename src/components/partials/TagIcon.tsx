import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TagIconProps {
  icon: React.ReactNode;
  title: string;
  href?: string;
  isLoading?: boolean;
}

export default function TagIcon({
  icon,
  title,
  isLoading,
  href,
}: TagIconProps) {
  return (
    <div
      className={twMerge(
        'flex h-20 cursor-pointer flex-col items-center justify-center gap-1',
        isLoading ? '' : 'border-secondary-600 border-b-4 border-solid',
      )}
      onClick={href ? () => window.open(href, '_blank') : undefined}
    >
      {isLoading ? (
        <>
          <div className="size-8 animate-pulse rounded-full bg-secondary-600" />
          <div className="h-2 w-14 animate-pulse rounded bg-secondary-600" />
        </>
      ) : (
        <>
          <div className="flex size-8 items-center justify-center rounded-full text-primary-50">
            {icon}
          </div>
          <p className="mt-1 text-nowrap pb-2 text-center text-sm text-primary-50">
            {title}
          </p>
        </>
      )}
    </div>
  );
}
