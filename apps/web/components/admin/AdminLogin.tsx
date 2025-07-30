'use client';

import { useState } from 'react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { Badge } from '@repo/ui/components/ui/badge';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAdminAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
        setPassword('');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed');
      setPassword('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl">Admin Access</CardTitle>
            <p className="text-muted-foreground">Enter your password to continue</p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  className="pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? 'Authenticating...' : 'Access Dashboard'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Badge variant="secondary" className="text-xs">
              Authorized personnel only
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}