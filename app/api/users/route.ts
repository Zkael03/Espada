// app/api/users/route.ts
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const query = 'SELECT id, username AS name, email, nomor_telepon, created_at, password FROM users';
    const [rows] = await db.promise().query(query);
    console.log('Users data:', rows);  // Tambahkan log untuk memverifikasi data
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
