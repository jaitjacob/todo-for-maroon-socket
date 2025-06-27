import express from 'express';

const router = express.Router();

let todos = [
  { id: 1, title: 'Buy groceries', completed: false, createdAt: '' },
  { id: 2, title: 'Walk the dog', completed: true, createdAt: '' },
  { id: 3, title: 'Read a book', completed: false, createdAt: '' },
  { id: 4, title: 'bla bla', completed: true, createdAt: '' }
];

//'/api/todos';
router.get('/', async (req, res) => {
  try {
    return res.status(200).json({
      data: todos
    });
  } catch (error) {
    res.send({
      error: 'nope'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id == id);

    if (!todo) {
      return res
        .status(404)
        .json({ msg: `could not find a Todo with id: ${id}` });
    }

    res.status(200).json({ data: todo });
  } catch (error) {
    res.send({
      error: 'nope'
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      tite: req.body.title || 'Untitled Todo',
      completed: false,
      createdAt: req.body.createdAt
    };

    todos.push(newTodo);

    res.status(201).json({ message: 'new Todo added.' });
  } catch (error) {
    res.status(400).send({
      error: 'nope'
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id == id);

    if (!todo) {
      return res.status(404).json({ msg: `Todo with id: ${id} was not found` });
    }

    todo.title = req.body.title;
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).send({
      error: 'nope'
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todo = todos.find((todo) => todo.id == id);
    if (!todo) {
      return res
        .status(404)
        .json({ msg: 'Todo does not exist. cannot delete.' });
    }

    todos = todos.filter((todo) => todo.id !== id);

    res.status(201).json({ data: todos });
  } catch (error) {
    res.status(400).send({
      error: 'delete failed'
    });
  }
});

export default router;
