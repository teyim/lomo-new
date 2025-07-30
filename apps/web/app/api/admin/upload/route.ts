import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Admin password check
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123!';

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!category || !['assets', 'backgrounds', 'layouts'].includes(category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 });
    }

    // Create upload directory if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads', category);
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;
    const filepath = join(uploadDir, filename);

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Return file info
    const fileInfo = {
      name: file.name,
      filename,
      size: file.size,
      type: file.type,
      category,
      url: `/uploads/${category}/${filename}`,
      uploadedAt: new Date().toISOString()
    };

    return NextResponse.json({ 
      success: true, 
      file: fileInfo 
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' }, 
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (!category || !['assets', 'backgrounds', 'layouts'].includes(category)) {
      return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
    }

    // In a real application, you would fetch files from a database
    // For now, return empty array as files are stored in localStorage on frontend
    return NextResponse.json({ files: [] });

  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch files' }, 
      { status: 500 }
    );
  }
}