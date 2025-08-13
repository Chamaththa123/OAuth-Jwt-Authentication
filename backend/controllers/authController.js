import { verifyGoogleToken, findOrCreateUser, generateJWT } from '../services/authService.js';

export const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;
    const googleUser = await verifyGoogleToken(token);

    const user = await findOrCreateUser(googleUser);
    const jwtToken = generateJWT(user);

    res.json({ token: jwtToken, user });
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Invalid Google token' });
  }
};