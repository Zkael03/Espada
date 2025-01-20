import { NextResponse } from 'next/server';
import db from "../../../../lib/db";
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    // Query untuk mencari user berdasarkan email
    const query = 'SELECT * FROM users WHERE username = ?';
    const values = [username];

    // Menunggu hasil query database
    const [results]: [Array<any>, any] = await db.promise().query(query, values);  // Tipe query yang benar

    // Jika tidak ada user yang ditemukan
    if (results.length === 0) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Bandingkan password yang dikirimkan dengan password di database
    const user = results[0]; // Ambil user pertama (harusnya hanya 1 user)
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Password cocok, login berhasil
      return NextResponse.json(
        { message: 'Login successful', userId: user.id },
        { status: 200 }
      );
    } else {
      // Password tidak cocok
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Error processing request' },
      { status: 500 }
    );
  }
}
