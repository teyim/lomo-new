'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi, setAuthToken, getAuthToken } from '@/services/adminApi';

interface Admin {
  id: string;
  email: string;
  name: string | null;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  admin: Admin | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const token = getAuthToken();
      if (token) {
        const response = await authApi.verify();
        setAdmin(response.admin);
        setIsAuthenticated(true);
      }
    } catch (error) {
      // Token is invalid or expired
      setAuthToken(null);
      setAdmin(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await authApi.login(email, password);
      setAuthToken(response.token);
      setAdmin(response.admin);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setAuthToken(null);
      setAdmin(null);
      setIsAuthenticated(false);
    }
  };

  return (
    <AdminAuthContext.Provider value={{ 
      isAuthenticated, 
      admin, 
      isLoading, 
      login, 
      logout, 
      checkAuth 
    }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}