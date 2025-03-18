import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🌱 Starting seed process...');

    // Create admin user
    const adminPassword = await hash('Password123!', 10);
    const admin = await prisma.user.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        name: 'Admin User',
        email: 'admin@example.com',
        password: adminPassword,
        role: 'ADMIN',
      },
    });
    console.log('👤 Created admin user:', admin.name);

    // Create regular user
    const userPassword = await hash('Password123!', 10);
    const user = await prisma.user.upsert({
      where: { email: 'user@example.com' },
      update: {},
      create: {
        name: 'Regular User',
        email: 'user@example.com',
        password: userPassword,
        role: 'USER',
      },
    });
    console.log('👤 Created regular user:', user.name);

    // Create categories
    const tshirtCategory = await prisma.category.upsert({
      where: { slug: 't-shirts' },
      update: {},
      create: {
        name: 'T-Shirts',
        description: 'Comfortable t-shirts for everyday wear',
        slug: 't-shirts',
        image: '/images/c-tshirts.jpg',
        isActive: true,
      },
    });
    console.log('📁 Created category:', tshirtCategory.name);

    const jeansCategory = await prisma.category.upsert({
      where: { slug: 'jeans' },
      update: {},
      create: {
        name: 'Jeans',
        description: 'Stylish jeans for all occasions',
        slug: 'jeans',
        image: '/images/c-jeans.jpg',
        isActive: true,
      },
    });
    console.log('📁 Created category:', jeansCategory.name);

    const shoesCategory = await prisma.category.upsert({
      where: { slug: 'shoes' },
      update: {},
      create: {
        name: 'Shoes',
        description: 'Footwear for all seasons',
        slug: 'shoes',
        image: '/images/c-shoes.jpg',
        isActive: true,
      },
    });
    console.log('📁 Created category:', shoesCategory.name);

    // Create products for T-Shirts
    const tshirt1 = await prisma.product.upsert({
      where: { sku: 'TS-001' },
      update: {},
      create: {
        name: 'Classic White T-Shirt',
        description: 'A comfortable white t-shirt made from 100% cotton. Perfect for casual wear and layering.',
        price: 24.99,
        images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
        sku: 'TS-001',
        barcode: '123456789001',
        inventory: 100,
        featured: true,
        isActive: true,
        categoryId: tshirtCategory.id,
      },
    });
    console.log('📦 Created product:', tshirt1.name);

    const tshirt2 = await prisma.product.upsert({
      where: { sku: 'TS-002' },
      update: {},
      create: {
        name: 'Graphic Print T-Shirt',
        description: 'A stylish graphic t-shirt with modern design. Made from soft, breathable fabric.',
        price: 29.99,
        images: ['/images/p12-1.jpg', '/images/p12-2.jpg'],
        sku: 'TS-002',
        barcode: '123456789002',
        inventory: 75,
        featured: false,
        isActive: true,
        categoryId: tshirtCategory.id,
      },
    });
    console.log('📦 Created product:', tshirt2.name);

    // Create products for Jeans
    const jeans1 = await prisma.product.upsert({
      where: { sku: 'JN-001' },
      update: {},
      create: {
        name: 'Slim Fit Jeans',
        description: 'Stylish slim fit jeans with a modern cut. Comfortable stretch fabric for all-day wear.',
        price: 59.99,
        images: ['/images/p21-1.jpg', '/images/p21-2.jpg'],
        sku: 'JN-001',
        barcode: '123456789003',
        inventory: 50,
        featured: true,
        isActive: true,
        categoryId: jeansCategory.id,
      },
    });
    console.log('📦 Created product:', jeans1.name);

    const jeans2 = await prisma.product.upsert({
      where: { sku: 'JN-002' },
      update: {},
      create: {
        name: 'Relaxed Fit Jeans',
        description: 'Comfortable relaxed fit jeans perfect for casual wear. Durable denim that lasts.',
        price: 54.99,
        images: ['/images/p22-1.jpg', '/images/p22-2.jpg'],
        sku: 'JN-002',
        barcode: '123456789004',
        inventory: 60,
        featured: false,
        isActive: true,
        categoryId: jeansCategory.id,
      },
    });
    console.log('📦 Created product:', jeans2.name);

    // Create products for Shoes
    const shoes1 = await prisma.product.upsert({
      where: { sku: 'SH-001' },
      update: {},
      create: {
        name: 'Casual Sneakers',
        description: 'Lightweight and comfortable sneakers for everyday wear. Cushioned insole for all-day comfort.',
        price: 89.99,
        images: ['/images/p31-1.jpg', '/images/p31-2.jpg'],
        sku: 'SH-001',
        barcode: '123456789005',
        inventory: 40,
        featured: true,
        isActive: true,
        categoryId: shoesCategory.id,
      },
    });
    console.log('📦 Created product:', shoes1.name);

    const shoes2 = await prisma.product.upsert({
      where: { sku: 'SH-002' },
      update: {},
      create: {
        name: 'Running Shoes',
        description: 'High-performance running shoes with advanced cushioning technology. Breathable and lightweight.',
        price: 119.99,
        images: ['/images/p32-1.jpg', '/images/p32-2.jpg'],
        sku: 'SH-002',
        barcode: '123456789006',
        inventory: 30,
        featured: false,
        isActive: true,
        categoryId: shoesCategory.id,
      },
    });
    console.log('📦 Created product:', shoes2.name);

    // Add some product attributes
    for (const product of [tshirt1, tshirt2]) {
      await prisma.productAttribute.createMany({
        skipDuplicates: true,
        data: [
          { productId: product.id, name: 'Size', value: 'S' },
          { productId: product.id, name: 'Size', value: 'M' },
          { productId: product.id, name: 'Size', value: 'L' },
          { productId: product.id, name: 'Size', value: 'XL' },
          { productId: product.id, name: 'Color', value: 'White' },
          { productId: product.id, name: 'Color', value: 'Black' },
          { productId: product.id, name: 'Material', value: 'Cotton' },
        ]
      });
    }

    for (const product of [jeans1, jeans2]) {
      await prisma.productAttribute.createMany({
        skipDuplicates: true,
        data: [
          { productId: product.id, name: 'Size', value: '30' },
          { productId: product.id, name: 'Size', value: '32' },
          { productId: product.id, name: 'Size', value: '34' },
          { productId: product.id, name: 'Size', value: '36' },
          { productId: product.id, name: 'Color', value: 'Blue' },
          { productId: product.id, name: 'Color', value: 'Black' },
          { productId: product.id, name: 'Material', value: 'Denim' },
        ]
      });
    }

    for (const product of [shoes1, shoes2]) {
      await prisma.productAttribute.createMany({
        skipDuplicates: true,
        data: [
          { productId: product.id, name: 'Size', value: '8' },
          { productId: product.id, name: 'Size', value: '9' },
          { productId: product.id, name: 'Size', value: '10' },
          { productId: product.id, name: 'Size', value: '11' },
          { productId: product.id, name: 'Color', value: 'Black' },
          { productId: product.id, name: 'Color', value: 'White' },
          { productId: product.id, name: 'Material', value: 'Synthetic' },
        ]
      });
    }

    console.log('✅ Added product attributes');

    console.log('🌱 Seed process completed successfully');
  } catch (error) {
    console.error('❌ Seed process failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }); 