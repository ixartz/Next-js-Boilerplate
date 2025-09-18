'use client';

import { Gear, SignOut } from '@phosphor-icons/react';
import { useLogout } from '@services/auth';
import { useUserProfile } from '@services/user';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/components/button';

/**
 * Compact user profile component for sidebar
 */
export const UserProfile = () => {
  const { data: user, isLoading, error } = useUserProfile();
  const logoutMutation = useLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center gap-3 p-3">
        <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
        <div className="flex-1">
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
          <div className="mt-1 h-2 w-16 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <Link href="/auth/login">
        <Button
          type="button"
          variant="outline"
          className="flex h-auto w-full items-center justify-start gap-3 p-3 transition-colors hover:bg-gray-50"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-xs text-gray-600">
            ?
          </div>
          <div className="flex-1 text-left">
            <p className="text-xs text-gray-500">Not available - Click to login</p>
          </div>
        </Button>
      </Link>

    );
  }

  // Generate initials from email
  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  // Generate avatar color based on email
  const getAvatarColor = (email: string) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-yellow-500',
      'bg-red-500',
    ];
    const index = email.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const handleLogout = () => {
    logoutMutation.mutate();
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      {/* User Profile Button */}
      <Button
        variant="ghost"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex h-auto w-full items-center justify-start gap-3 p-3"
      >
        {/* Mock Avatar */}
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-white ${getAvatarColor(user.email)}`}
        >
          {getInitials(user.email)}
        </div>

        {/* User Info */}
        <div className="min-w-0 flex-1 text-left">
          <p className="truncate text-sm font-medium text-gray-900">
            {user.email}
          </p>
          <div className="flex items-center gap-1">
            <div
              className={`h-2 w-2 rounded-full ${
                user.status === 1 ? 'bg-green-400' : 'bg-gray-400'
              }`}
            />
            <p className="text-xs text-gray-500">
              {user.status === 1 ? 'Active' : 'Inactive'}
            </p>
          </div>
        </div>
      </Button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setIsDropdownOpen(false);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
          />

          {/* Menu */}
          <div className="absolute bottom-full left-0 z-20 mb-2 w-full min-w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            {/* User Info Header */}
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-white ${getAvatarColor(user.email)}`}
              >
                {getInitials(user.email)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">
                  {user.fullname || 'User'}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-1">
              <Button
                variant="ghost"
                onClick={() => {
                  setIsDropdownOpen(false);
                  // TODO: Navigate to settings
                }}
                className="flex h-auto w-full justify-start gap-3 px-4 py-2 text-sm font-normal text-gray-700"
              >
                <Gear size={16} />
                Settings
              </Button>

              <Button
                variant="ghost"
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
                className="flex h-auto w-full justify-start gap-3 px-4 py-2 text-sm font-normal text-gray-700 disabled:opacity-50"
              >
                <SignOut size={16} />
                {logoutMutation.isPending ? 'Signing out...' : 'Logout'}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
