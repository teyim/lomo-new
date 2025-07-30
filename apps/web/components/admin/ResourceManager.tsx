'use client';

import { useState } from 'react';
import { Trash2, Download, Eye, Search, Grid, List, RefreshCw, FileX } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/ui/select';
import { Card, CardContent } from '@repo/ui/components/ui/card';
import { Skeleton } from '@repo/ui/components/ui/skeleton';
import { 
  useAssets, 
  useBackgrounds, 
  useLayouts, 
  useDeleteAsset, 
  useDeleteBackground 
} from '@/hooks/useAdminQueries';
import { Asset, Background, Layout } from '@/services/adminApi';

interface ResourceManagerProps {
  category: 'assets' | 'backgrounds' | 'layouts';
}

type ResourceItem = Asset | Background | Layout;

export function ResourceManager({ category }: ResourceManagerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'date'>('date');

  // React Query hooks
  const assetsQuery = useAssets();
  const backgroundsQuery = useBackgrounds();
  const layoutsQuery = useLayouts();
  const deleteAssetMutation = useDeleteAsset();
  const deleteBackgroundMutation = useDeleteBackground();

  // Get the appropriate query based on category
  const query = category === 'assets' ? assetsQuery : 
                category === 'backgrounds' ? backgroundsQuery : 
                layoutsQuery;

  const files = query.data || [];
  const isLoading = query.isLoading;
  const error = query.error;

  const deleteFile = async (file: ResourceItem) => {
    try {
      if (category === 'assets') {
        await deleteAssetMutation.mutateAsync(file.id);
      } else if (category === 'backgrounds') {
        await deleteBackgroundMutation.mutateAsync(file.id);
      } else {
        throw new Error('Delete not supported for layouts');
      }
    } catch (error) {
      console.error('Failed to delete file:', error);
    }
  };

  const downloadFile = (file: ResourceItem) => {
    const url = getFileUrl(file);
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const previewFile = (file: ResourceItem) => {
    const url = getFileUrl(file);
    if (url) {
      window.open(url, '_blank');
    }
  };

  const filteredFiles = files
    .filter(file => 
      file.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'date':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isImage = (file: ResourceItem) => {
    const url = 'imgUrl' in file ? file.imgUrl : 'imageUrl' in file ? file.imageUrl : '';
    return url && url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/i);
  };

  const getFileUrl = (file: ResourceItem) => {
    return 'imgUrl' in file ? file.imgUrl : 'imageUrl' in file ? file.imageUrl : '';
  };

  const getFileExtension = (filename: string) => {
    return filename.split('.').pop()?.toUpperCase() || 'FILE';
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-32" />
          <div className="flex gap-2">
            <Skeleton className="h-9 w-20" />
            <Skeleton className="h-9 w-32" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="p-4">
              <Skeleton className="aspect-square mb-3" />
              <Skeleton className="h-4 w-3/4 mb-2" />
              <Skeleton className="h-3 w-1/2" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileX className="w-8 h-8 text-destructive" />
        </div>
        <h3 className="text-lg font-medium mb-2">Error loading files</h3>
        <p className="text-destructive mb-4">{error instanceof Error ? error.message : 'Unknown error'}</p>
        <Button onClick={() => query.refetch()}>
          Try Again
        </Button>
      </div>
    );
  }

  if (files.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <FileX className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">No files uploaded yet</h3>
        <p className="text-muted-foreground">Upload some {category} to get started.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => query.refetch()}
            disabled={isLoading}
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>

          <Select value={sortBy} onValueChange={(value: 'name' | 'date') => setSortBy(value)}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="name">Sort by Name</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-lg">
            <Button
              size="icon"
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Files Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredFiles.map((file) => (
            <Card key={file.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden relative">
                {isImage(file) ? (
                  <Image
                    src={getFileUrl(file)}
                    alt={file.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        {getFileExtension(file.name)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <h3 className="font-medium truncate mb-1" title={file.name}>
                {file.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {formatDate(file.createdAt)}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {('url' in file) && (
                    <>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => previewFile(file)}
                        className="h-8 w-8"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => downloadFile(file)}
                        className="h-8 w-8"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
                {(category === 'assets' || category === 'backgrounds') && (
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => deleteFile(file)}
                    className="h-8 w-8 text-destructive hover:text-destructive"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    File
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Uploaded
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredFiles.map((file) => (
                  <tr key={file.id} className="hover:bg-muted/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                          {isImage(file) ? (
                            <Image
                              src={getFileUrl(file)}
                              alt={file.name}
                              width={40}
                              height={40}
                              className="w-10 h-10 object-cover rounded"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                              <span className="text-xs font-medium text-muted-foreground">
                                {getFileExtension(file.name)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{file.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {('url' in file) ? 'Image' : 'Layout'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {formatDate(file.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end gap-1">
                        {('url' in file) && (
                          <>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => previewFile(file)}
                              className="h-8 w-8"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => downloadFile(file)}
                              className="h-8 w-8"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        {(category === 'assets' || category === 'backgrounds') && (
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => deleteFile(file)}
                            className="h-8 w-8 text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {filteredFiles.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No files found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}