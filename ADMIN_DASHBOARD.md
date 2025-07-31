# Secret Admin Dashboard

## Overview
A secure admin dashboard for managing resources including assets, backgrounds, and layouts for the Lomo application.

## Features
- 🔐 **Secure Authentication**: Password-protected access
- 📁 **File Upload**: Support for multiple file types
- 🖼️ **Asset Management**: Upload and manage images, icons, and other assets
- 🎨 **Background Management**: Manage background images and patterns
- 📐 **Layout Management**: Upload and manage layout templates
- 👁️ **File Preview**: Preview uploaded files
- 📊 **File Management**: View, download, and delete files
- 🔍 **Search & Filter**: Find files quickly with search and sorting
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Access Instructions

### 1. Navigate to Admin Dashboard
Visit: `http://localhost:3000/admin`

### 2. Login Credentials
- **Email**: admin@lomo.com
- **Password**: admin123!

### 3. Dashboard Features

#### File Upload
- **Assets**: Upload images, icons, SVGs (formats: .jpg, .jpeg, .png, .gif, .svg, .webp, .ico)
- **Backgrounds**: Upload background images (formats: .jpg, .jpeg, .png, .webp, .svg)
- **Layouts**: Upload layout templates (formats: .json, .html, .css)
- **File Size Limit**: 10MB per file
- **Batch Upload**: Upload multiple files at once

#### File Management
- **Grid/List View**: Switch between visual grid and detailed list view
- **Search**: Find files by name
- **Sort**: Sort by name, date, or file size
- **Preview**: View files in new tab
- **Download**: Download files to your device
- **Delete**: Remove files from storage

## Security Features
- Session-based authentication
- Password protection
- Admin-only access
- Secure file upload validation

## File Storage
- Files are stored using Supabase Storage
- Backend API handles file uploads and management
- Organized by category (assets, backgrounds, layouts)
- Unique filenames to prevent conflicts

## Environment Configuration
The admin password and API configuration in `.env.local`:
```
NEXT_PUBLIC_API_HOST=http://127.0.0.1:3001
ADMIN_PASSWORD=admin123!
```

## API Endpoints
**Backend API (http://127.0.0.1:3001):**
- `POST /assets` - Upload asset files
- `GET /assets` - List all assets
- `GET /assets/:categoryId` - List assets by category
- `DELETE /assets/:id` - Delete asset
- `PUT /assets/:id` - Update asset
- `POST /backgrounds` - Upload background files
- `GET /backgrounds` - List all backgrounds
- `DELETE /backgrounds/:id` - Delete background
- `PUT /backgrounds/:id` - Update background
- `GET /layouts` - List all layouts
- `GET /asset-categories` - List asset categories

## Backend Integration
- Admin panel now fetches data from the backend API
- Real-time updates when files are uploaded or deleted
- Proper error handling and loading states
- Asset categorization support
- File metadata management

## Development Notes
- Files are stored in Supabase Storage via the backend API
- Authentication system uses sessionStorage (upgrade to JWT for production)
- Backend handles file validation and processing
- Admin panel automatically refreshes data after operations

## Troubleshooting
1. **Can't access admin page**: Ensure you're navigating to `/admin`
2. **Login fails**: Check that you're using the correct password (`admin123!`)
3. **Upload fails**: Verify file size is under 10MB and format is supported
4. **Files not showing**: Check browser console for errors

