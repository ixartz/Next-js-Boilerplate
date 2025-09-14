'use client';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Command as CommandPrimitive } from 'cmdk';
import { cn } from '@/utils';

export const Command = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive> & { ref?: React.RefObject<React.ElementRef<typeof CommandPrimitive> | null> }) => (
  <CommandPrimitive
    ref={ref}
    className={cn('flex size-full flex-col overflow-hidden rounded border', className)}
    {...props}
  />
);

Command.displayName = CommandPrimitive.displayName;

export const CommandInput = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & { ref?: React.RefObject<React.ElementRef<typeof CommandPrimitive.Input> | null> }) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <MagnifyingGlass size={16} className="mr-1 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-9 w-full rounded border-none bg-transparent py-3 text-sm outline-none focus:ring-transparent disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

export const CommandList = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & { ref?: React.RefObject<React.ElementRef<typeof CommandPrimitive.List> | null> }) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
);

CommandList.displayName = CommandPrimitive.List.displayName;

export const CommandEmpty = ({ ref, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & { ref?: React.RefObject<React.ElementRef<typeof CommandPrimitive.Empty> | null> }) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export const CommandGroup = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & { ref?: React.RefObject<React.ElementRef<typeof CommandPrimitive.Group> | null> }) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:opacity-60',
      className,
    )}
    {...props}
  />
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

export const CommandSeparator = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & { ref?: React.RefObject<React.ElementRef<typeof CommandPrimitive.Separator> | null> }) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
);

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export const CommandItem = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & { ref?: React.RefObject<React.ElementRef<typeof CommandPrimitive.Item> | null> }) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded px-2 py-1.5 text-sm outline-none aria-selected:bg-secondary/40 aria-selected:text-secondary-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
      className,
    )}
    {...props}
  />
);

CommandItem.displayName = CommandPrimitive.Item.displayName;
