import express from 'express';
import todoRoutes from './routes/todoRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('todo server is online');
});

app.listen(PORT, () => {
  console.log(`server listening on ${HOST}:${PORT}`);
});
