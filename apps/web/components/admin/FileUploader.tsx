'use client';

import { useState, useRef } from 'react';
import { Upload, X, CheckCircle, AlertCircle, File } from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@repo/ui/components/ui/select';
import { Card } from '@repo/ui/components/ui/card';
import { useAssetCategories, useUploadAsset, useUploadBackground } from '@/hooks/useAdminQueries';
import Image from 'next/image';

interface FileUploaderProps {
  category: 'assets' | 'backgrounds' | 'layouts';
}

interface UploadFile {
  file: File;
  id: string;
  status: 'pending' | 'uploading' | 'success' | 'error';
  progress: number;
  error?: string;
  name: string;
  categoryId?: string;
}

export function FileUploader({ category }: FileUploaderProps) {
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // React Query hooks
  const { data: assetCategories = [] } = useAssetCategories();
  const uploadAssetMutation = useUploadAsset();
  const uploadBackgroundMutation = useUploadBackground();

  const acceptedTypes = {
    assets: '.jpg,.jpeg,.png,.gif,.svg,.webp,.ico',
    backgrounds: '.jpg,.jpeg,.png,.webp,.svg',
    layouts: '.json,.html,.css'
  };

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadFile[] = Array.from(selectedFiles).map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      progress: 0,
      name: file.name.split('.')[0] || file.name, // Default name without extension, fallback to full name
      categoryId: assetCategories[0]?.id || undefined,
    }));

    // Validate files
    const validatedFiles = newFiles.map(fileItem => {
      if (fileItem.file.size > maxFileSize) {
        return {
          ...fileItem,
          status: 'error' as const,
          error: 'File size exceeds 10MB limit'
        };
      }
      return fileItem;
    });

    setFiles(prev => [...prev, ...validatedFiles]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const updateFileName = (id: string, name: string) => {
    setFiles(prev => prev.map(f => 
      f.id === id ? { ...f, name } : f
    ));
  };

  const updateFileCategory = (id: string, categoryId: string) => {
    setFiles(prev => prev.map(f => 
      f.id === id ? { ...f, categoryId } : f
    ));
  };

  const uploadFile = async (fileItem: UploadFile) => {
    setFiles(prev => prev.map(f => 
      f.id === fileItem.id 
        ? { ...f, status: 'uploading', progress: 0 }
        : f
    ));

    try {
      if (category === 'assets') {
        await uploadAssetMutation.mutateAsync({
          file: fileItem.file,
          name: fileItem.name,
          categoryId: fileItem.categoryId
        });
      } else if (category === 'backgrounds') {
        await uploadBackgroundMutation.mutateAsync({
          file: fileItem.file,
          name: fileItem.name
        });
      } else {
        throw new Error('Layout uploads not yet supported');
      }

      setFiles(prev => prev.map(f => 
        f.id === fileItem.id 
          ? { ...f, status: 'success', progress: 100 }
          : f
      ));

      // Remove successful uploads after 2 seconds
      setTimeout(() => {
        setFiles(prev => prev.filter(f => f.id !== fileItem.id));
      }, 2000);

    } catch (error) {
      console.error('Upload error:', error);
      setFiles(prev => prev.map(f => 
        f.id === fileItem.id 
          ? { ...f, status: 'error', error: error instanceof Error ? error.message : 'Upload failed' }
          : f
      ));
    }
  };

  const uploadAll = () => {
    files
      .filter(file => file.status === 'pending')
      .forEach(uploadFile);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return URL.createObjectURL(file);
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <Card
        className={`border-2 border-dashed p-8 text-center cursor-pointer transition-colors ${
          isDragOver
            ? 'border-primary bg-primary/5'
            : 'border-muted-foreground/25 hover:border-muted-foreground/50'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-lg font-medium mb-2">Drop files here or click to browse</p>
        <p className="text-sm text-muted-foreground">Accepted formats: {acceptedTypes[category]}</p>
        <p className="text-xs text-muted-foreground mt-1">Maximum file size: 10MB</p>
      </Card>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept={acceptedTypes[category]}
        onChange={e => handleFileSelect(e.target.files)}
        className="hidden"
      />

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Files to Upload</h3>
            <Button
              onClick={uploadAll}
              disabled={!files.some(f => f.status === 'pending')}
              size="sm"
            >
              Upload All
            </Button>
          </div>

          <div className="space-y-2">
            {files.map(fileItem => (
              <Card
                key={fileItem.id}
                className="p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {getFileIcon(fileItem.file) ? (
                      <Image
                        src={getFileIcon(fileItem.file)!}
                        alt={fileItem.file.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover rounded"
                      />
                    ) : (
                      <File className="w-10 h-10 text-muted-foreground" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 space-y-2">
                    <div>
                      <p className="text-sm font-medium truncate">{fileItem.file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(fileItem.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>

                    {/* File configuration */}
                    {fileItem.status === 'pending' && (
                      <div className="space-y-2">
                        <Input
                          placeholder="Enter file name"
                          value={fileItem.name}
                          onChange={e => updateFileName(fileItem.id, e.target.value)}
                          className="h-8 text-xs"
                        />

                        {category === 'assets' && assetCategories.length > 0 && (
                          <Select
                            value={fileItem.categoryId || ''}
                            onValueChange={value => updateFileCategory(fileItem.id, value)}
                          >
                            <SelectTrigger className="h-8 text-xs">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {assetCategories.map(cat => (
                                <SelectItem
                                  key={cat.id}
                                  value={cat.id}
                                >
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    )}

                    {fileItem.status === 'uploading' && (
                      <div className="mt-1">
                        <div className="w-full bg-secondary rounded-full h-1.5">
                          <div
                            className="bg-primary h-1.5 rounded-full transition-all"
                            style={{ width: `${fileItem.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {fileItem.error && (
                      <p className="text-xs text-destructive mt-1">{fileItem.error}</p>
                    )}
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-1">
                    {fileItem.status === 'pending' && (
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => uploadFile(fileItem)}
                        className="h-8 w-8"
                      >
                        <Upload className="w-4 h-4" />
                      </Button>
                    )}
                    {fileItem.status === 'success' && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {fileItem.status === 'error' && (
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    )}
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => removeFile(fileItem.id)}
                      className="h-8 w-8"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}