import mysql from 'mysql2';

// Koneksi pool ke database MySQL
const db = mysql.createPool({
  host: 'localhost',
  user: 'root', // Ganti dengan username Anda
  password: 'azka', // Ganti dengan password Anda
  database: 'espada', // Ganti dengan nama database Anda
  port: 3308,
  waitForConnections: true,
  connectionLimit: 10, // Maksimal koneksi dalam pool
  queueLimit: 0, // Tanpa batas antrian
});

// Tes koneksi
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to database!');
  connection.release(); // Kembalikan koneksi ke pool
});

export default db;
