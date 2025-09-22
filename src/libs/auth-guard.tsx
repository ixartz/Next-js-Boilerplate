'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AuthService } from './auth';

type AuthGuardProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

/**
 * Client-side authentication guard component
 * Redirects to login if user is not authenticated
 */
export const AuthGuard = ({ children, fallback }: AuthGuardProps) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = AuthService.isAuthenticated();
      setIsAuthenticated(authenticated);

      if (!authenticated) {
        router.push('/auth/login');
      }
    };

    checkAuth();
  }, [router]);

  // Loading state
  if (isAuthenticated === null) {
    return fallback || <div>Loading...</div>;
  }

  // Not authenticated
  if (!isAuthenticated) {
    return fallback || null;
  }

  // Authenticated
  return <>{children}</>;
};
