import db from '../../../../lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { OkPacket, RowDataPacket } from 'mysql2';

// Helper function untuk database query
function queryDatabase(sql: string, values: any[]): Promise<any> {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
}

// Fungsi untuk menangani metode DELETE
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ message: 'ID tidak valid' }, { status: 400 });
    }

    try {
      const result = await queryDatabase('DELETE FROM items WHERE id = ?', [id]) as OkPacket;

      if (result.affectedRows === 0) {
        return NextResponse.json({ message: 'Produk tidak ditemukan' }, { status: 404 });
      }

      return NextResponse.json({ message: 'Produk berhasil dihapus' }, { status: 200 });
    } catch (dbError) {
      console.error('Error deleting product:', dbError);
      return NextResponse.json(
        { message: 'Terjadi kesalahan saat menghapus produk' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in DELETE handler:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan internal' }, { status: 500 });
  }
}

// Fungsi untuk menangani metode GET
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ message: 'ID tidak valid' }, { status: 400 });
    }

    try {
      const results = await queryDatabase('SELECT * FROM items WHERE id = ?', [id]) as RowDataPacket[];

      if (results.length === 0) {
        return NextResponse.json({ message: 'Produk tidak ditemukan' }, { status: 404 });
      }

      return NextResponse.json({ product: results[0] }, { status: 200 });
    } catch (dbError) {
      console.error('Error fetching product:', dbError);
      return NextResponse.json(
        { message: 'Terjadi kesalahan saat mengambil data produk' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in GET handler:', error);
    return NextResponse.json({ message: 'Terjadi kesalahan internal' }, { status: 500 });
  }
}