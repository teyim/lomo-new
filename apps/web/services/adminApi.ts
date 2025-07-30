const API_BASE_URL = process.env.NEXT_PUBLIC_API_HOST || 'http://127.0.0.1:3001';

export interface Asset {
  id: string;
  name: string;
  imgUrl: string;
  imgKey: string;
  categoryId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Background {
  id: string;
  name: string;
  imageUrl: string;
  imgKey: string;
  createdAt: string;
  updatedAt: string;
}

export interface Layout {
  id: string;
  name: string;
  previewimage: string;
  createdAt: string;
  updatedAt: string;
}

export interface AssetCategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminLoginResponse {
  admin: {
    id: string;
    email: string;
    name: string | null;
    lastLoginAt: Date | null;
  };
  token: string;
  expiresAt: Date;
}

export interface AdminVerifyResponse {
  admin: {
    id: string;
    email: string;
    name: string | null;
  };
}

// Token management
let authToken: string | null = null;

export const setAuthToken = (token: string | null) => {
  authToken = token;
  if (token) {
    localStorage.setItem('admin_token', token);
  } else {
    localStorage.removeItem('admin_token');
  }
};

export const getAuthToken = (): string | null => {
  if (authToken) return authToken;
  if (typeof window !== 'undefined') {
    authToken = localStorage.getItem('admin_token');
  }
  return authToken;
};

const getAuthHeaders = () => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Asset API functions
export const assetApi = {
  // Get all assets
  getAll: async (): Promise<Asset[]> => {
    const response = await fetch(`${API_BASE_URL}/assets`);
    if (!response.ok) {
      throw new Error('Failed to fetch assets');
    }
    const data = await response.json();
    return data.assets || [];
  },

  // Get assets by category
  getByCategory: async (categoryId: string): Promise<Asset[]> => {
    const response = await fetch(`${API_BASE_URL}/assets/${categoryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch assets by category');
    }
    const data = await response.json();
    return data.assets || [];
  },

  // Upload new asset
  upload: async (file: File, name: string, categoryId?: string): Promise<Asset> => {
    const formData = new FormData();
    formData.append('asset', file);
    formData.append('name', name);
    if (categoryId) {
      formData.append('categoryId', categoryId);
    }

    const response = await fetch(`${API_BASE_URL}/assets`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload asset');
    }

    const data = await response.json();
    return data.background; // Note: API returns 'background' field for assets
  },

  // Delete asset
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/assets/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete asset');
    }
  },

  // Update asset
  update: async (id: string, file: File, name: string, categoryId?: string): Promise<Asset> => {
    const formData = new FormData();
    formData.append('asset', file);
    formData.append('name', name);
    if (categoryId) {
      formData.append('categoryId', categoryId);
    }

    const response = await fetch(`${API_BASE_URL}/assets/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to update asset');
    }

    const data = await response.json();
    return data.asset;
  },
};

// Background API functions
export const backgroundApi = {
  // Get all backgrounds
  getAll: async (): Promise<Background[]> => {
    const response = await fetch(`${API_BASE_URL}/backgrounds`);
    if (!response.ok) {
      throw new Error('Failed to fetch backgrounds');
    }
    const data = await response.json();
    return data.backgrounds || [];
  },

  // Upload new background
  upload: async (file: File, name: string): Promise<Background> => {
    const formData = new FormData();
    formData.append('background', file);
    formData.append('name', name);

    const response = await fetch(`${API_BASE_URL}/backgrounds`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload background');
    }

    const data = await response.json();
    return data.background;
  },

  // Delete background
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/backgrounds/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete background');
    }
  },

  // Update background
  update: async (id: string, file: File, name: string): Promise<Background> => {
    const formData = new FormData();
    formData.append('background', file);
    formData.append('name', name);

    const response = await fetch(`${API_BASE_URL}/backgrounds/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to update background');
    }

    const data = await response.json();
    return data.background;
  },
};

// Layout API functions
export const layoutApi = {
  // Get all layouts
  getAll: async (): Promise<Layout[]> => {
    const response = await fetch(`${API_BASE_URL}/layouts`);
    if (!response.ok) {
      throw new Error('Failed to fetch layouts');
    }
    const data = await response.json();
    return data.layouts || [];
  },
};

// Authentication API functions
export const authApi = {
  // Login admin
  login: async (email: string, password: string): Promise<AdminLoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login failed');
    }

    const data = await response.json();
    return data.data;
  },

  // Verify admin token
  verify: async (): Promise<AdminVerifyResponse> => {
    const response = await fetch(`${API_BASE_URL}/admin/verify`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Token verification failed');
    }

    const data = await response.json();
    return data.data;
  },

  // Logout admin
  logout: async (): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/admin/logout`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }
  },
};

// Asset Category API functions
export const assetCategoryApi = {
  // Get all asset categories
  getAll: async (): Promise<AssetCategory[]> => {
    const response = await fetch(`${API_BASE_URL}/asset-categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch asset categories');
    }
    const data = await response.json();
    return data.categories || [];
  },
};