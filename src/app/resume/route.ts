import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Read the PDF file from the public directory
    const filePath = join(process.cwd(), 'public', 'resume.pdf');
    const fileBuffer = readFileSync(filePath);

    // Create response with appropriate headers
    const response = new NextResponse(fileBuffer);

    // Set content headers
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set('Content-Disposition', 'inline; filename="Matthew_Stewart_Resume.pdf"');

    return response;
  } catch (error) {
    return new NextResponse('Resume not found', { status: 404 });
  }
}