// app/api/items/route.ts
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.promise().query('SELECT * FROM items ORDER BY id ASC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, category, image, best_seller, trending } = body;
    
    const [result] = await db.promise().query(
      'INSERT INTO items (name, price, category, image, best_seller, trending) VALUES (?, ?, ?, ?, ?, ?)',
      [name, price, category, image, best_seller, trending]
    );
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}
