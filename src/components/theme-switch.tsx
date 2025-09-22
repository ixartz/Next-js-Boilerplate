'use client';

import type { Variants } from 'framer-motion';
import { CloudSun, Moon, Sun } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Button } from '@/components/ui/components/button';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  size?: number;
  className?: string;
};

export const ThemeSwitch = ({ size = 20, className }: Props) => {
  const { theme, toggleTheme } = useTheme();

  const variants: Variants = useMemo(() => {
    return {
      light: { x: 0 },
      system: { x: size * -1 },
      dark: { x: size * -2 },
    };
  }, [size]);

  return (
    <Button size="icon" variant="ghost" className={className} onClick={toggleTheme}>
      <div className="cursor-pointer overflow-hidden" style={{ width: size, height: size }}>
        <motion.div animate={theme} variants={variants} className="flex">
          <Sun size={size} className="shrink-0" />
          <CloudSun size={size} className="shrink-0" />
          <Moon size={size} className="shrink-0" />
        </motion.div>
      </div>
    </Button>
  );
};
