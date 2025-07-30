'use client';

import { AdminAuthProvider as AuthProvider } from '@/context/AdminAuthContext';

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}