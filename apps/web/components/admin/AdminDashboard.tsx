'use client';

import { useState } from 'react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { 
  LogOut, 
  Upload, 
  Image, 
  Layout, 
  Palette,
  FileText,
  Users
} from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card';
import { Badge } from '@repo/ui/components/ui/badge';
import { FileUploader } from './FileUploader';
import { ResourceManager } from './ResourceManager';
import { AdminManagement } from './AdminManagement';

type TabType = 'assets' | 'backgrounds' | 'layouts' | 'admins';

export function AdminDashboard() {
  const { logout } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<TabType>('assets');

  const tabs = [
    { id: 'assets' as TabType, label: 'Assets', icon: Image, description: 'Upload images, icons, and other assets' },
    { id: 'backgrounds' as TabType, label: 'Backgrounds', icon: Palette, description: 'Manage background images and patterns' },
    { id: 'layouts' as TabType, label: 'Layouts', icon: Layout, description: 'Upload and manage layout templates' },
    { id: 'admins' as TabType, label: 'Admins', icon: Users, description: 'Manage administrator accounts and permissions' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <Badge variant="secondary">Secret Access</Badge>
            </div>
            <Button
              variant="ghost"
              onClick={logout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant="ghost"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors rounded-none ${
                      activeTab === tab.id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </Button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {/* Tab Description */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-primary">
                {tabs.find(tab => tab.id === activeTab)?.description}
              </p>
            </CardContent>
          </Card>

          {/* Admin Management Tab */}
          {activeTab === 'admins' && (
            <Card>
              <CardContent className="pt-6">
                <AdminManagement />
              </CardContent>
            </Card>
          )}

          {/* File Management Tabs */}
          {activeTab !== 'admins' && (
            <>
              {/* File Uploader */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload {tabs.find(tab => tab.id === activeTab)?.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FileUploader category={activeTab as 'assets' | 'backgrounds' | 'layouts'} />
                </CardContent>
              </Card>

              {/* Resource Manager */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Manage {tabs.find(tab => tab.id === activeTab)?.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResourceManager category={activeTab as 'assets' | 'backgrounds' | 'layouts'} />
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}