import sqlite3 from 'sqlite3';
import path from 'path';

const DB_PATH = path.join(__dirname, 'todoapp.db');

let db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.log('db connection failed: ', err.message);
  } else {
    console.log(`db connected: ${DB_PATH}`);

    db.run(
      `CREATE TABLE IF NOT EXISTS users(
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              username UNIQUE NOT NULL,
              password TEXT NOT NULL
        )`,
      (err) => {
        if (err) {
          console.error('could NOT create USERS table.');
        } else {
          console.log('users table created OR already exists.');
        }
      }
    );

    db.run(
      `CREATE TABLE IF NOT EXISTS profiles(
                  id INTEGER PRIMARY KEY AUTO INCREMENT,
                  user_id INTEGER UNIQUE NOT NULL,
                  name TEXT,
                  email TEXT UNIQUE NOT NULL,
                  FOREIGN KEY(user_id) REFERENCES users(id)
          )`, // ^ON DELETE CASCADE ensures profile data is deleted if the associated user is removed.
      (err) => {
        if (err) {
          console.log('could NOT create PROFILES table.');
        } else {
          console.log('PROFILES table created OR already exists.');
        }
      }
    );
  }
});
