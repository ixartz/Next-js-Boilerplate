'use client';
import { CaretRight, Check } from '@phosphor-icons/react';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { cn } from '@/utils';

export const ContextMenu = ContextMenuPrimitive.Root;

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

export const ContextMenuGroup = ContextMenuPrimitive.Group;

export const ContextMenuPortal = ContextMenuPrimitive.Portal;

export const ContextMenuSub = ContextMenuPrimitive.Sub;

export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export const ContextMenuSubTrigger = ({ ref, className, inset, children, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean;
} & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.SubTrigger> | null> }) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-secondary focus:text-secondary-foreground data-[state=open]:bg-secondary data-[state=open]:text-secondary-foreground',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <CaretRight className="ml-auto size-4" />
  </ContextMenuPrimitive.SubTrigger>
);

ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

export const ContextMenuSubContent = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent> & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.SubContent> | null> }) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 max-h-[var(--radix-context-menu-content-available-height)] w-[var(--radix-context-menu-trigger-width)] min-w-32 origin-[var(--radix-context-menu-content-transform-origin)] overflow-hidden rounded-md border bg-background p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className,
    )}
    {...props}
  />
);

ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

export const ContextMenuContent = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.Content> | null> }) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'z-50 max-h-[var(--radix-context-menu-content-available-height)] w-[var(--radix-context-menu-trigger-width)] min-w-32 origin-[var(--radix-context-menu-content-transform-origin)] overflow-hidden rounded-md border bg-background p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
);

ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

export const ContextMenuItem = ({ ref, className, inset, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean;
} & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.Item> | null> }) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-secondary focus:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);

ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

export const ContextMenuCheckboxItem = ({ ref, className, children, checked, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem> & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem> | null> }) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-secondary focus:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check size={14} />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
);

ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

export const ContextMenuRadioItem = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem> & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.RadioItem> | null> }) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-secondary focus:text-secondary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check size={14} className="fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
);

ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

export const ContextMenuLabel = ({ ref, className, inset, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean;
} & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.Label> | null> }) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold text-foreground', inset && 'pl-8', className)}
    {...props}
  />
);

ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

export const ContextMenuSeparator = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator> & { ref?: React.RefObject<React.ElementRef<typeof ContextMenuPrimitive.Separator> | null> }) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
);

ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
