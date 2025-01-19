import { NextResponse } from "next/server";
import db from "@/lib/db"; // Sesuaikan path ke file koneksi database Anda

export async function GET() {
  const query = "SELECT * FROM items WHERE best_seller = ?";
  const params = ["Yes"];

  return new Promise((resolve, reject) => {
    db.query(query, params, (err, rows) => {
      if (err) {
        console.error("Error fetching best seller items:", err);
        return reject(new NextResponse("Error fetching data", { status: 500 }));
      }
      resolve(new NextResponse(JSON.stringify(rows), { status: 200 }));
    });
  });
}
