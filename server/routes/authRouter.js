import express from 'express';
import bcrypt from 'bcrypt';
// Import your db instance, e.g.:
import db from '../db/db.js'; // Adjust path as needed

const router = express.Router();
const SALT_ROUNDS = 10;

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: 'username, email, password are required.' });
  }

  bcrypt.hash(password, SALT_ROUNDS, (err, hashedPassword) => {
    if (err) {
      console.error('bcrypt hashing error: ', err.message);
      return res.status(500).json({ message: 'error processing password.' });
    }

    db.run(
      `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
      [username, email, hashedPassword],
      function (err) {
        if (err) {
          if (
            err.message.includes('UNIQUE constraint failed: users.username')
          ) {
            return res.status(409).json({ message: 'username taken' });
          }
          if (err.message.includes('UNIQUE constraint failed: users.email')) {
            return res
              .status(409)
              .json({ message: 'email already registered' });
          }
          console.error('db error during user registration: ', err.message);
          return res.status(500).json({ message: 'Error registering user' });
        }

        return res.status(201).json({
          message: 'registration successful',
          userid: this.lastID,
          username: username,
          email: email
        });
      }
    );
  });
});

export default router;
