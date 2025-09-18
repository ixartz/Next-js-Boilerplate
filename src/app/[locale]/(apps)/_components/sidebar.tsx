'use client';

import { CameraIcon, ClockCounterClockwise, Stack } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import { Logo } from '@/components/logo';
import { Button, KeyboardShortcut, Separator } from '@/components/ui';

import { UserProfile } from '@/components/UserProfile';
import { cn } from '@/utils';

type Props = {
  className?: string;
};

const ActiveIndicator = ({ className }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={cn(
      'size-1.5 animate-pulse rounded-full bg-sky-500 shadow-[0_0_12px] shadow-sky-500',
      className,
    )}
  />
);

type SidebarItem = {
  path: string;
  name: string;
  shortcut?: string;
  icon: React.ReactNode;
};

type SidebarItemProps = SidebarItem & {
  onClick?: () => void;
};

const SidebarItemComponent = ({ path, name, shortcut, icon, onClick }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Button
      asChild
      size="lg"
      variant="ghost"
      className={cn(
        'h-auto justify-start px-4 py-3 transition-all duration-200',
        isActive
          ? 'pointer-events-none bg-gradient-to-r from-sky-500/20 to-emerald-500/20 border-l-4 border-l-sky-500 bg-sky-50 shadow-md'
          : 'hover:bg-zinc-100',
      )}
      onClick={onClick}
    >
      <Link href={path}>
        <div className={cn(
          'mr-3 transition-colors duration-200',
          isActive ? 'text-sky-700' : 'text-zinc-600',
        )}
        >
          {icon}
        </div>
        <span className={cn(
          'font-semibold transition-colors duration-200',
          isActive ? 'text-sky-800' : 'text-zinc-700',
        )}
        >
          {name}
        </span>
        {!isActive && <KeyboardShortcut className="ml-auto">{shortcut}</KeyboardShortcut>}
        {isActive && <ActiveIndicator className="ml-auto" />}
      </Link>
    </Button>
  );
};

type SidebarProps = {
  setOpen?: (open: boolean) => void;
};

export const Sidebar = ({ setOpen }: SidebarProps) => {
  const router = useRouter();

  useKeyboardShortcut(['shift', 'a'], () => {
    router.push('/apps/analyze');
    setOpen?.(false);
  });

  useKeyboardShortcut(['shift', 's'], () => {
    router.push('/apps/settings');
    setOpen?.(false);
  });

  const sidebarItems: SidebarItem[] = [
    {
      path: '/apps/analyze',
      name: 'Analyze',
      shortcut: '⇧R',
      icon: <CameraIcon />,
    },
    {
      path: '/apps/history',
      name: 'History',
      shortcut: '⇧S',
      icon: <ClockCounterClockwise />,
    },
    {
      path: '/apps/references',
      name: 'References',
      shortcut: '⇧S',
      icon: <Stack />,
    },
  ];

  return (
    <div className="flex h-full flex-col gap-y-4">
      <div className="flex justify-center lg:justify-start">
        <Logo
          size="md"
          showText={true}
          className="hidden lg:flex"
          href="/apps"
        />
        <Logo
          size="md"
          showText={false}
          className="flex lg:hidden"
          href="/apps"
        />
      </div>

      <Separator className="opacity-50" />

      <div className="grid gap-y-2">
        {sidebarItems.map(item => (
          <SidebarItemComponent {...item} key={item.path} onClick={() => setOpen?.(false)} />
        ))}
      </div>

      <div className="flex-1" />

      <Separator className="opacity-50" />
      <UserProfile />
    </div>
  );
};
