// app/api/test/route.ts
import { NextResponse } from 'next/server';
import db from '@/config/db'; // Mengimpor koneksi dari folder config

const testConnection = async () => {
  try {
    await db.query('SELECT 1');
    console.log('Next.js and MySQL Connected!');
    return 'Next.js and MySQL Connected!';
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    return 'Error connecting to MySQL';
  }
};

export async function GET() {
  const message = await testConnection();
  return NextResponse.json({ message });
}