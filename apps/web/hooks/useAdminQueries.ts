import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { assetApi, backgroundApi, layoutApi, assetCategoryApi, adminManagementApi, Asset, Background, Layout, AssetCategory, Admin, CreateAdminRequest } from '@/services/adminApi';

// Query Keys
export const adminQueryKeys = {
  assets: ['admin', 'assets'] as const,
  assetsByCategory: (categoryId: string) => ['admin', 'assets', 'category', categoryId] as const,
  backgrounds: ['admin', 'backgrounds'] as const,
  layouts: ['admin', 'layouts'] as const,
  assetCategories: ['admin', 'asset-categories'] as const,
  admins: ['admin', 'admins'] as const,
};

// Asset Queries
export function useAssets() {
  return useQuery({
    queryKey: adminQueryKeys.assets,
    queryFn: assetApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useAssetsByCategory(categoryId: string) {
  return useQuery({
    queryKey: adminQueryKeys.assetsByCategory(categoryId),
    queryFn: () => assetApi.getByCategory(categoryId),
    enabled: !!categoryId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAssetCategories() {
  return useQuery({
    queryKey: adminQueryKeys.assetCategories,
    queryFn: assetCategoryApi.getAll,
    staleTime: 10 * 60 * 1000, // 10 minutes (categories change less frequently)
  });
}

// Background Queries
export function useBackgrounds() {
  return useQuery({
    queryKey: adminQueryKeys.backgrounds,
    queryFn: backgroundApi.getAll,
    staleTime: 5 * 60 * 1000,
  });
}

// Layout Queries
export function useLayouts() {
  return useQuery({
    queryKey: adminQueryKeys.layouts,
    queryFn: layoutApi.getAll,
    staleTime: 5 * 60 * 1000,
  });
}

// Asset Mutations
export function useUploadAsset() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ file, name, categoryId }: { file: File; name: string; categoryId?: string }) =>
      assetApi.upload(file, name, categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.assets });
      queryClient.invalidateQueries({ queryKey: ['admin', 'assets', 'category'] });
    },
  });
}

export function useDeleteAsset() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: assetApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.assets });
      queryClient.invalidateQueries({ queryKey: ['admin', 'assets', 'category'] });
    },
  });
}

export function useUpdateAsset() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, file, name, categoryId }: { id: string; file: File; name: string; categoryId?: string }) =>
      assetApi.update(id, file, name, categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.assets });
      queryClient.invalidateQueries({ queryKey: ['admin', 'assets', 'category'] });
    },
  });
}

// Background Mutations
export function useUploadBackground() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ file, name }: { file: File; name: string }) =>
      backgroundApi.upload(file, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.backgrounds });
    },
  });
}

export function useDeleteBackground() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: backgroundApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.backgrounds });
    },
  });
}

export function useUpdateBackground() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, file, name }: { id: string; file: File; name: string }) =>
      backgroundApi.update(id, file, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.backgrounds });
    },
  });
}

// Admin Management Queries
export function useAdmins() {
  return useQuery({
    queryKey: adminQueryKeys.admins,
    queryFn: adminManagementApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// Admin Management Mutations
export function useCreateAdmin() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: adminManagementApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.admins });
    },
  });
}

export function useUpdateAdminStatus() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      adminManagementApi.updateStatus(id, isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.admins });
    },
  });
}

export function useDeleteAdmin() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: adminManagementApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminQueryKeys.admins });
    },
  });
}