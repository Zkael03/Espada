import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

// Fungsi POST untuk menambahkan item ke keranjang
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Mengambil data keranjang dari database berdasarkan user_id yang di dapat dari cookie.
 * Jika user_id tidak ada, maka akan mengembalikan respons dengan status 401.
 * Jika terjadi error, maka akan mengembalikan respons dengan status 500.
 * @param {Request} request - The HTTP request.
 * @returns {Promise<NextResponse>} - The HTTP response.
 */
/******  23287771-7a96-4b67-9501-e2c293a3b87c  *******/export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user_id, item_id, jumlah } = body;

    if (!user_id || !item_id || !jumlah) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const checkQuery = 'SELECT * FROM keranjang WHERE user_id = ? AND item_id = ?';
    const checkValues = [user_id, item_id];

    const result = await new Promise<any[]>((resolve, reject) => {
      db.query(checkQuery, checkValues, (err: Error | null, results: any[]) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });

    if (result.length > 0) {
      // Update jumlah item di keranjang jika sudah ada
      const updateQuery = 'UPDATE keranjang SET jumlah = jumlah + ? WHERE user_id = ? AND item_id = ?';
      const updateValues = [jumlah, user_id, item_id];

      await new Promise<void>((resolve, reject) => {
        db.query(updateQuery, updateValues, (err: Error | null) => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      });

      return NextResponse.json({ message: 'Item updated in cart' }, { status: 200 });
    } else {
      // Menambahkan item baru ke keranjang
      const insertQuery = 'INSERT INTO keranjang (user_id, item_id, jumlah) VALUES (?, ?, ?)';
      const insertValues = [user_id, item_id, jumlah];

      await new Promise<void>((resolve, reject) => {
        db.query(insertQuery, insertValues, (err: Error | null) => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      });

      return NextResponse.json({ message: 'Item added to cart' }, { status: 201 });
    }
  } catch (error: unknown) {
    console.error('Error adding item to cart:', error);
    return NextResponse.json(
      { message: 'Error adding item to cart', error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
    try {
      const user_id = 1; // Ganti dengan logika untuk mendapatkan user_id yang benar
  
      const query = 'SELECT * FROM keranjang WHERE user_id = ?';
      const values = [user_id];
  
      const result = await new Promise<any[]>((resolve, reject) => {
        db.query(query, values, (err: Error | null, results: any[]) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        });
      });
  
      return NextResponse.json(result, { status: 200 });
    } catch (error: unknown) {
      console.error('Error fetching cart data:', error);
      return NextResponse.json(
        { message: 'Error fetching cart data', error: (error as Error).message },
        { status: 500 }
      );
    }
  }
