#!/bin/bash

# Database Setup Script for Lomo Admin System
echo "🚀 Setting up Lomo database with initial admin user..."

# Navigate to database package
cd packages/database

# Install dependencies
echo "📦 Installing database dependencies..."
pnpm install

# Generate Prisma client
echo "🔧 Generating Prisma client..."
pnpm run db:generate

# Push database schema
echo "📊 Pushing database schema..."
pnpm run db:push

# Run database seeding
echo "🌱 Seeding database with initial admin user..."
pnpm run db:seed

echo ""
echo "✅ Database setup complete!"
echo ""
echo "🔐 Initial Admin Credentials:"
echo "   Email: admin@lomo.com"
echo "   Password: admin123!"
echo ""
echo "🌐 Access the admin dashboard at: http://localhost:3000/admin"
echo ""
echo "💡 To start the development servers:"
echo "   1. API Server: cd apps/api && npm run dev"
echo "   2. Web App: cd apps/web && npm run dev"
echo ""