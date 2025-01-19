import { NextResponse } from "next/server";
import db from "../../../lib/db"; // pastikan path ke db benar

export async function GET() {
  try {
    const query = "SELECT * FROM items WHERE category = 'Dessert'"; // query untuk mendapatkan steak dari kategori steak
    const [rows] = await db.promise().query(query); // menjalankan query dengan db.query

    // Pastikan rows adalah array dengan tipe RowDataPacket[]
    if ((rows as any[]).length === 0) { // pastikan untuk mengakses panjang array
      return NextResponse.json({ message: "No dessert found" }, { status: 404 });
    }

    return NextResponse.json(rows); // mengembalikan hasil query sebagai respons JSON
  } catch (error) {
    console.error("Error fetching dessert:", error);
    return NextResponse.json({ message: "Error fetching dessert" }, { status: 500 });
  }
}
