const express = require('express');
const app = express();
 
app.use(express.json());
 
let todos = [
  { id: 1, task: "Learn Express", completed: false },
  { id: 2, task: "Build API", completed: true }
];
 
app.get('/todos', (req, res) => res.json(todos));
 
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.send("Not found");
  res.json(todo);
});
 
app.post('/todos', (req, res) => {
  if (Array.isArray(req.body)) {
    const newTodos = req.body.map((item) => {
      const newTodo = {
        id: todos.length + 1,
        task: item.task,
        completed: item.completed || false
      };
      todos.push(newTodo);
      return newTodo;
    });
    return res.json(newTodos);
  }

  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: req.body.completed || false
  };
  todos.push(newTodo);
  res.json(newTodo);
});
 
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.send("Not found");
 
  todo.task = req.body.task || todo.task;
  todo.completed = req.body.completed ?? todo.completed;
 
  res.json(todo);
});
 
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.send("Deleted");
});
 
app.listen(3003, () => {
  console.log("Server running on port 3003");
});