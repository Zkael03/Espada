import { NextResponse } from "next/server";
import db from "../../../lib/db"; // pastikan path ke db benar

export async function GET() {
  try {
    const query = "SELECT * FROM items WHERE category = 'Side Dish'"; // query untuk mendapatkan side dish
    const [rows] = await db.promise().query(query); // menjalankan query dengan db.query

    if ((rows as any[]).length === 0) {
      return NextResponse.json({ message: "No side dishes found" }, { status: 404 });
    }

    return NextResponse.json(rows); // mengembalikan hasil query sebagai respons JSON
  } catch (error) {
    console.error("Error fetching side dishes:", error);
    return NextResponse.json({ message: "Error fetching side dishes" }, { status: 500 });
  }
}
