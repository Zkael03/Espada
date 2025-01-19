// config/db.ts
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Sesuaikan dengan password MySQL Anda
  database: 'espada_db', // Nama database Anda
});

export default db;
