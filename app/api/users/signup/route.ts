import { NextResponse } from 'next/server';
import db from "../../../../lib/db";
import { OkPacket } from 'mysql2'; // OkPacket untuk hasil query INSERT

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, email, phone, password } = body;

    // Query untuk insert data
    const query = 'INSERT INTO users (username, email, nomor_telepon, password, created_at) VALUES (?, ?, ?, ?, NOW())';
    const values = [username, email, phone, password];

    return new Promise((resolve, reject) => {
      db.query(query, values, (error, results: OkPacket) => {
        if (error) {
          console.error('Error executing query:', error);
          resolve(NextResponse.json(
            { message: 'Error registering user', error: error.message },
            { status: 500 }
          ));
        } else {
          const insertId = results.insertId; // akses insertId dari OkPacket
          resolve(NextResponse.json(
            { message: 'User registered successfully', userId: insertId },
            { status: 201 }
          ));
        }
      });
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { message: 'Error processing request' },
      { status: 500 }
    );
  }
}
