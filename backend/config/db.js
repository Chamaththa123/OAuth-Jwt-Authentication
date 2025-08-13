import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});


(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('MySQL Database Connected');
    connection.release();
  } catch (error) {
    console.error('MySQL Connection Failed:', error.message);
  }
})();

export default pool;
