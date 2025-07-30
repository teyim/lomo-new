# 🔐 Lomo Admin System Setup Guide

This guide will help you set up the admin authentication system and create the initial admin user for the Lomo application.

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB database connection
- Environment variables configured

## 🚀 Quick Setup

### 1. Run the Database Setup Script

The easiest way to set up everything is to run our automated setup script:

```bash
# From the project root
./scripts/setup-database.sh
```

This script will:
- Install database dependencies
- Generate Prisma client
- Push database schema to MongoDB
- Create the initial admin user
- Set up sample asset categories

### 2. Manual Setup (Alternative)

If you prefer to run the setup manually:

```bash
# Navigate to database package
cd packages/database

# Install dependencies
npm install

# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed database with initial admin
npm run db:seed
```

## 🔑 Initial Admin Credentials

After running the setup, you'll have an initial admin user:

- **Email**: `admin@lomo.com`
- **Password**: `admin123!`
- **Name**: System Administrator

## 🌐 Accessing the Admin Dashboard

1. Start the development servers:

```bash
# Terminal 1: Start API server
cd apps/api
npm run dev

# Terminal 2: Start web application
cd apps/web
npm run dev
```

2. Navigate to the admin dashboard:
   - URL: `http://localhost:3000/admin`
   - Login with the initial admin credentials

## 👥 Admin Management Features

Once logged in as an admin, you can:

### Create New Admins
- **Endpoint**: `POST /admin/create`
- **UI**: Available in the admin dashboard
- **Required**: Email, password (min 8 characters), optional name

### View All Admins
- **Endpoint**: `GET /admin/list`
- **UI**: Admin management section
- **Returns**: List of all admins (excluding passwords)

### Activate/Deactivate Admins
- **Endpoint**: `PATCH /admin/:id/status`
- **UI**: Toggle switches in admin list
- **Note**: Cannot deactivate your own account

### Delete Admins
- **Endpoint**: `DELETE /admin/:id`
- **UI**: Delete buttons in admin list
- **Note**: Cannot delete your own account

## 🔒 Security Features

### Password Security
- Passwords are hashed using bcryptjs with 12 salt rounds
- Minimum password length: 8 characters
- Email format validation

### Session Management
- Token-based authentication with expiration
- Automatic cleanup of expired sessions
- Secure logout functionality

### Route Protection
- Admin authentication required for:
  - Asset upload/update/delete
  - Background upload/update/delete
  - Admin management operations
- Public read access for assets and backgrounds

## 🛠 API Endpoints

### Authentication
```
POST /admin/login          # Admin login
POST /admin/verify         # Token verification
POST /admin/logout         # Admin logout
```

### Admin Management (Protected)
```
POST /admin/create         # Create new admin
GET /admin/list           # List all admins
PATCH /admin/:id/status   # Update admin status
DELETE /admin/:id         # Delete admin
```

### Protected Resource Operations
```
POST /assets              # Upload asset (admin only)
PUT /assets/:id           # Update asset (admin only)
DELETE /assets/:id        # Delete asset (admin only)

POST /backgrounds         # Upload background (admin only)
PUT /backgrounds/:id      # Update background (admin only)
DELETE /backgrounds/:id   # Delete background (admin only)
```

## 🗄 Database Schema

### Admin Model
```prisma
model Admin {
  id          String         @id @default(auto()) @map("_id") @db.ObjectId
  email       String         @unique
  password    String         // Hashed password
  name        String?
  isActive    Boolean        @default(true)
  lastLoginAt DateTime?
  sessions    AdminSession[] // Relation to admin sessions
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
}
```

### Admin Session Model
```prisma
model AdminSession {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  adminId   String   @db.ObjectId
  admin     Admin    @relation(fields: [adminId], references: [id], onDelete: Cascade)
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔧 Environment Variables

Make sure these environment variables are set:

```env
# Database
DATABASE_URL="your-mongodb-connection-string"

# JWT (optional, defaults provided)
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# API
NEXT_PUBLIC_API_HOST="http://127.0.0.1:3001"
```

## 🚨 Important Security Notes

1. **Change Default Password**: After initial setup, change the default admin password
2. **Secure JWT Secret**: Use a strong, unique JWT secret in production
3. **HTTPS in Production**: Always use HTTPS in production environments
4. **Regular Cleanup**: Expired sessions are automatically cleaned up
5. **Admin Permissions**: Only create admin accounts for trusted users

## 🔄 Updating the System

To update the database schema:

```bash
cd packages/database

# After modifying schema.prisma
npm run db:generate
npm run db:push
```

To re-seed the database:

```bash
cd packages/database
npm run db:seed
```

## 🐛 Troubleshooting

### Common Issues

1. **"Admin already exists" during seeding**
   - This is normal if you've already run the seed script
   - The existing admin user will be preserved

2. **Database connection errors**
   - Check your `DATABASE_URL` environment variable
   - Ensure MongoDB is running and accessible

3. **Authentication failures**
   - Verify the admin credentials
   - Check if the admin account is active
   - Ensure the API server is running

4. **Permission denied errors**
   - Make sure you're logged in as an admin
   - Check that your session hasn't expired
   - Verify the authorization header is being sent

### Reset Admin System

To completely reset the admin system:

```bash
# WARNING: This will delete all admin users and sessions
cd packages/database
npx prisma db push --force-reset
npm run db:seed
```

## 📞 Support

If you encounter any issues with the admin system setup, please check:

1. All environment variables are properly set
2. Database connection is working
3. All dependencies are installed
4. Both API and web servers are running

The admin system provides a secure foundation for managing your Lomo application resources!