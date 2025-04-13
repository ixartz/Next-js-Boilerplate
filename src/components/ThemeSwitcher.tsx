'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="ml-auto"
    >
      {theme === 'dark'
        ? (
            <Moon className="size-5" />
          )
        : (
            <Sun className="size-5" />
          )}
    </Button>
  );
}
