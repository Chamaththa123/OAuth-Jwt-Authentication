import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_ID } from '../config/googleConfig.js';

const client = new OAuth2Client(GOOGLE_CLIENT_ID);

export const verifyGoogleToken = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: GOOGLE_CLIENT_ID
  });
  return ticket.getPayload();
};

export const findOrCreateUser = async (userData) => {
  const { email, name, picture } = userData;
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

  if (rows.length > 0) {
    return rows[0];
  } else {
    const [result] = await pool.query(
      'INSERT INTO users (name, email, picture) VALUES (?, ?, ?)',
      [name, email, picture]
    );
    return { id: result.insertId, name, email, picture };
  }
};

export const generateJWT = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};
