'use client';

import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Plus,
  UserCheck,
  UserX,
  Trash2,
  Mail,
  Calendar,
  Shield,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@repo/ui/components/ui/button';
import { Card} from '@repo/ui/components/ui/card';
import { Badge } from '@repo/ui/components/ui/badge';
import { Input } from '@repo/ui/components/ui/input';
import { Label } from '@repo/ui/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@repo/ui/components/ui/alert-dialog';
import { adminManagementApi, Admin, CreateAdminRequest } from '@/services/adminApi';
import { toast } from '@repo/ui/components/ui/sonner';

export function AdminManagement() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newAdmin, setNewAdmin] = useState<CreateAdminRequest>({
    email: '',
    password: '',
    name: '',
  });
  const queryClient = useQueryClient();

  // Fetch all admins
  const {
    data: admins = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['admins'],
    queryFn: adminManagementApi.getAll,
  });

  // Create admin mutation
  const createAdminMutation = useMutation({
    mutationFn: adminManagementApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      setIsCreateDialogOpen(false);
      setNewAdmin({ email: '', password: '', name: '' });
      toast('Success', {
        description: 'Admin created successfully',
      });
    },
    onError: (error: Error) => {
      toast('Error', {
        description: error.message,
      });
    },
  });

  // Update admin status mutation
  const updateStatusMutation = useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      adminManagementApi.updateStatus(id, isActive),
    onSuccess: updatedAdmin => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      toast('Success', {
        description: `Admin ${updatedAdmin.isActive ? 'activated' : 'deactivated'} successfully`,
      });
    },
    onError: (error: Error) => {
      toast('Error', {
        description: error.message,
      });
    },
  });

  // Delete admin mutation
  const deleteAdminMutation = useMutation({
    mutationFn: adminManagementApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admins'] });
      toast('Success', {
        description: 'Admin deleted successfully',
      });
    },
    onError: (error: Error) => {
      toast('Error', {
        description: error.message,
      });
    },
  });

  const handleCreateAdmin = () => {
    if (!newAdmin.email || !newAdmin.password) {
      toast('Error', {
        description: 'Email and password are required',
      });
      return;
    }

    createAdminMutation.mutate(newAdmin);
  };

  const handleToggleStatus = (admin: Admin) => {
    updateStatusMutation.mutate({
      id: admin.id,
      isActive: !admin.isActive,
    });
  };

  const handleDeleteAdmin = (adminId: string) => {
    deleteAdminMutation.mutate(adminId);
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">Loading admins...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-destructive">Failed to load admins</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Create Button */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Admin Management</h3>
          <p className="text-sm text-muted-foreground">Manage admin accounts and permissions</p>
        </div>

        <Dialog
          open={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
        >
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create Admin
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Admin</DialogTitle>
              <DialogDescription>
                Add a new administrator to the system. They will be able to access the admin
                dashboard.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={newAdmin.email}
                  onChange={e => setNewAdmin({ ...newAdmin, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Admin Name"
                  value={newAdmin.name}
                  onChange={e => setNewAdmin({ ...newAdmin, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  value={newAdmin.password}
                  onChange={e => setNewAdmin({ ...newAdmin, password: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsCreateDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateAdmin}
                disabled={createAdminMutation.isPending}
              >
                {createAdminMutation.isPending ? 'Creating...' : 'Create Admin'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Admins List */}
      <div className="grid gap-4">
        {admins.map(admin => (
          <Card
            key={admin.id}
            className="p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{admin.name || 'Unnamed Admin'}</h4>
                    <Badge variant={admin.isActive ? 'default' : 'secondary'}>
                      {admin.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3" />
                      {admin.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Last login: {formatDate(admin.lastLoginAt)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleToggleStatus(admin)}
                  disabled={updateStatusMutation.isPending}
                  className="gap-1"
                >
                  {admin.isActive ? (
                    <>
                      <UserX className="w-3 h-3" />
                      Deactivate
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-3 h-3" />
                      Activate
                    </>
                  )}
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-3 h-3" />
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                        Delete Admin
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this admin account? This action cannot be
                        undone.
                        <br />
                        <br />
                        <strong>Admin:</strong> {admin.name || 'Unnamed'} ({admin.email})
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeleteAdmin(admin.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete Admin
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </Card>
        ))}

        {admins.length === 0 && (
          <Card className="p-8 text-center">
            <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Admins Found</h3>
            <p className="text-muted-foreground mb-4">
              Create your first admin account to get started.
            </p>
            <Button
              onClick={() => setIsCreateDialogOpen(true)}
              className="gap-2"
            >
              <Plus className="w-4 h-4" />
              Create First Admin
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
