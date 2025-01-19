// /app/api/connect/route.ts

import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
  return new Promise((resolve, reject) => {
    db.query('SELECT 1', (err, result) => {
      if (err) {
        console.error('Error connecting to database:', err.message);
        return reject(new NextResponse('Error connecting to database', { status: 500 }));
      }
      console.log('Next.js and MySQL Connected!');
      resolve(new NextResponse('Database connected successfully!', { status: 200 }));
    });
  });
}
