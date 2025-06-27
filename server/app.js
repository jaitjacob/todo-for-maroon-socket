import express from 'express';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

const host = 'localhost';
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('todo server is online');
});

app.listen(port, () => {
  console.log(`server listening on ${host}:${port}`);
});
