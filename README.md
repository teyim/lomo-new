# Lomo - Blog Thumbnail Creator

A modern, full-stack application for creating stunning blog thumbnails in seconds. Built with a Turborepo monorepo architecture featuring a Next.js frontend and Express.js API backend.

## 🎯 What is Lomo?

Lomo is a professional thumbnail creation tool that allows content creators to:

- **Choose from curated backgrounds** - Select from a collection of high-quality background images
- **Perfect text colors** - Automatically suggested color palettes based on background selection
- **Customize layouts** - Pre-designed layout templates with drag-and-drop functionality
- **Add visual assets** - Categorized collection of icons, illustrations, and design elements
- **Export high-quality thumbnails** - Generate production-ready images for blogs, social media, and content platforms

### Key Features

- 🎨 **Visual Editor** - Canvas-based editor built with Fabric.js for precise design control
- 📱 **Responsive Design** - Optimized for desktop use (mobile support coming soon)
- 🎯 **Template System** - Pre-built layouts with customizable elements
- 🌈 **Smart Color Suggestions** - AI-powered color recommendations based on background analysis
- 📦 **Asset Library** - Organized collection of design assets by category
- ⚡ **Real-time Preview** - Instant visual feedback while designing

## 🏗️ Architecture

This project uses a **Turborepo monorepo** structure with the following packages:

### Apps
- **`web`** - Next.js 15 frontend application with App Router
- **`api`** - Express.js backend API with TypeScript

### Packages
- **`@repo/ui`** - Shared UI component library built with shadcn/ui
- **`@repo/db`** - Database layer with Prisma ORM and MongoDB
- **`@repo/eslint-config`** - Shared ESLint configurations
- **`@repo/typescript-config`** - Shared TypeScript configurations

## 🚀 Tech Stack

### Frontend (Web App)
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Fabric.js** - Canvas manipulation and graphics
- **Framer Motion** - Animation library
- **TanStack Query** - Data fetching and caching
- **Zustand** - State management
- **shadcn/ui** - UI component library

### Backend (API)
- **Express.js** - Node.js web framework
- **TypeScript** - Type-safe backend development
- **Prisma** - Database ORM
- **MongoDB** - NoSQL database
- **Supabase** - Backend-as-a-Service for file storage
- **Zod** - Runtime type validation
- **tsup** - TypeScript bundler
- **ts-node** - TypeScript execution environment

### Development Tools
- **Turborepo** - Monorepo build system
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm 9.0.0+
- MongoDB database
- Supabase account (for file storage)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lomo-new
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   
   Create environment files:
   ```bash
   # Database package
   cp packages/database/.env.example packages/database/.env
   
   # API app
   cp apps/api/.env.example apps/api/.env
   
   # Web app
   cp apps/web/.env.local.example apps/web/.env.local
   ```

   Configure the following environment variables:
   
   **Database (`packages/database/.env`)**:
   ```env
   DATABASE_URL="mongodb://localhost:27017/lomo"
   ```
   
   **API (`apps/api/.env`)**:
   ```env
   DATABASE_URL="database-uri"
   SUPABASE_URL="your-supabase-url"
   SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
   PORT=8000
   ```
   
   **Web (`apps/web/.env.local`)**:
   ```env
   NEXT_PUBLIC_API_HOST="http://localhost:3001"
   ```

4. **Database Setup**
Navigate to packages/database and run the following:
   ```bash
   # Generate Prisma client
   pnpm run db:generate
   
   # Push database schema
   pnpm run db:push
   
   # (Optional) Seed database
   pnpm --filter @repo/db run db:seed
   ```
Running the **build**,**dev** or  **start** commands at the root of the project also runs the `db:push`(see the turbo.json file ) which syncs the schema with the database and generated the prisma client in the `generated/client` directory

5. **Development**
   ```bash
   # Start all applications in development mode
   pnpm dev
   
   # Or start specific applications
   pnpm dev --filter=web    # Frontend only
   pnpm dev --filter=api    # Backend only
   ```

6. **Production Build**
   ```bash
   # Build all applications
   pnpm build
   
   # Start production servers
   pnpm start
   ```

## 🚧 Deployment Challenges & Solutions

During the development and deployment of this project, several challenges were encountered and resolved:

### 1. **shadcn/ui as a Shared Package**

**Challenge**: Setting up shadcn/ui components to work across multiple applications in a monorepo while maintaining proper TypeScript support and build processes.

**Solution**: 
- Created a dedicated `@repo/ui` package with proper export configuration
- Configured `components.json` with monorepo-specific aliases:
  ```json
  {
    "aliases": {
      "components": "@repo/ui/components",
      "utils": "@repo/ui/lib/utils",
      "ui": "@repo/ui/components/ui"
    }
  }
  ```
- Set up proper TypeScript path mapping in consuming applications
- Used workspace protocol (`workspace:*`) for internal package dependencies
- Created a global.css file in the web app and imported css file from the `@repo/ui` package(view **global.css** file in apps/web).
- Import **@repo/ui** postcss config in web app postcss config file

### 2. **API Build Process with tsup**

**Challenge**: Building and running TypeScript API code efficiently in both development and production environments.

**Solution**:
- **Development**: Used `nodemon` with `esbuild-register` for fast TypeScript compilation:
  ```json
  {
    "dev": "nodemon --exec \"node -r esbuild-register ./src/index.ts\" -e .ts"
  }
  ```
- **Production**: Implemented `tsup` for optimized builds:
  ```typescript
  // tsup.config.ts
  export default defineConfig({
    entryPoints: ['src/index.ts'],
    clean: true,
    format: ['cjs']
  });
  ```
- **Execution**: Used `ts-node` for running built JavaScript in production:
  ```json
  {
    "start": "ts-node dist/index.js"
  }
  ```

### 3. **Prisma Schema Generation in Production**

**Challenge**: Prisma client generation failing in production builds due to missing generated files and schema access issues.

**Solution**:
- **Custom Output Directory**: Configured Prisma to generate client in a tracked directory:
  ```prisma
  generator client {
    provider = "prisma-client-js"
    output = "../generated/client"
  }
  ```
- **Build Process Integration**: Ensured generated Prisma client is included in version control
- **Turbo Configuration**: Set up proper build dependencies so database operations happen before API builds:
  ```json
  {
    "api#build": {
      "dependsOn": ["^build", "^db:push"]
    }
  }
  ```

### 4. **Monorepo Build Dependencies**

**Challenge**: Managing build order and dependencies between packages, especially ensuring database operations complete before API builds.

**Solution**:
- **Package-specific Build Tasks**: Created targeted build configurations:
  ```json
  {
    "api#build": {
      "dependsOn": ["^build", "^db:push"]
    },
    "web#build": {
      "dependsOn": ["^build"]
    }
  }
  ```
- **Independent Production Web Builds**: Removed API dependency from web builds in production
- **Environment-specific Tasks**: Separated development and production task dependencies


## 📁 Project Structure

```
lomo-new/
├── apps/
│   ├── api/                 # Express.js API server
│   │   ├── src/
│   │   ├── tsup.config.ts   # Build configuration
│   │   └── package.json
│   └── web/                 # Next.js frontend
│       ├── app/             # App Router pages
│       ├── components/      # React components
│       ├── lib/            # Utility functions
│       └── package.json
├── packages/
│   ├── database/           # Prisma schema and client
│   │   ├── prisma/
│   │   ├── generated/      # Generated Prisma client
│   │   └── src/
│   ├── ui/                 # Shared UI components (shadcn/ui)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── lib/
│   │   └── components.json
│   ├── eslint-config/      # Shared ESLint configs
│   └── typescript-config/  # Shared TypeScript configs
├── turbo.json             # Turborepo configuration
├── pnpm-workspace.yaml    # pnpm workspace configuration
└── package.json           # Root package.json
```

## 🎯 Available Scripts

### Root Level
```bash
pnpm dev          # Start all apps in development
pnpm build        # Build all apps and packages
pnpm start        # Start all apps in production
pnpm lint         # Lint all packages
pnpm format       # Format code with Prettier
pnpm studio       # Open Prisma Studio
```

### Package-specific
```bash
pnpm dev --filter=web     # Start only web app
pnpm dev --filter=api     # Start only API server
pnpm build --filter=web   # Build only web app
```

## 🔧 Development Workflow

1. **Start Development Environment**
   ```bash
   pnpm dev
   ```
   This starts:
   - Web app at `http://localhost:3000`
   - API server at `http://localhost:3001`

2. **Database Management**
   ```bash
   pnpm studio                    # Open Prisma Studio
   pnpm --filter @repo/db db:push # Push schema changes
   ```

3. **Adding UI Components**
   ```bash
   cd packages/ui
   npx shadcn@latest add button   # Add new shadcn component
   ```

4. **Type Checking**
   ```bash
   pnpm check-types              # Check types across all packages
   ```

## 🚀 Deployment

The application is designed for deployment on modern platforms like Vercel(frontend), Railway(backend), or similar services that support monorepos.

### Deployment Configuration

1. **Web App (Frontend)**
   - Build Command: `pnpm build --filter=web`
   - Output Directory: `apps/web/.next`
   - Environment Variables: `NEXT_PUBLIC_API_HOST`

2. **API Server (Backend)**
   - Build Command: `pnpm build --filter=api`
   - Start Command: `pnpm start --filter=api`
   - Environment Variables: `DATABASE_URL`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
