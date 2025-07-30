import { PrismaClient } from '../generated/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Check if admin already exists
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: 'admin@lomo.com' }
  });

  if (existingAdmin) {
    console.log('✅ Admin user already exists');
    return;
  }

  // Create initial admin user
  const hashedPassword = await bcrypt.hash('admin123!', 12);
  
  const admin = await prisma.admin.create({
    data: {
      email: 'admin@lomo.com',
      password: hashedPassword,
      name: 'System Administrator',
      isActive: true,
    },
  });

  console.log('✅ Created initial admin user:');
  console.log(`   Email: ${admin.email}`);
  console.log(`   Name: ${admin.name}`);
  console.log(`   ID: ${admin.id}`);
  console.log('   Password: admin123!');

  // Create some sample asset categories if they don't exist
  const existingCategories = await prisma.assetCategory.findMany();
  
  if (existingCategories.length === 0) {
    const categories = [
      { name: 'Icons' },
      { name: 'Illustrations' },
      { name: 'Photos' },
      { name: 'Graphics' },
      { name: 'Logos' },
    ];

    for (const category of categories) {
      await prisma.assetCategory.create({
        data: category,
      });
    }

    console.log('✅ Created sample asset categories');
  }

  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });