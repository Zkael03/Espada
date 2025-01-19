// /lib/db.ts

import mysql from 'mysql2';

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Ganti dengan username Anda
  password: 'azka',  // Ganti dengan password Anda
  database: 'espada',  // Ganti dengan nama database Anda
  port:3308,
});

// Cek apakah berhasil terkoneksi
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to database!');
});

export default db;
