import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  // State to store the current input value
  const [task, setTask] = useState("");

  // State to store all tasks
  const [todos, setTodos] = useState([]);

  // State to track which task is being edited (by id)
  const [editingId, setEditingId] = useState(null);

  // State to store the text while editing
  const [editText, setEditText] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Function to delete a task by id
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to delete all tasks
  const deleteAll = () => {
    setTodos([]);
  };

  // Function to toggle task completion
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to start editing a task
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  // Function to save the edited task
  const saveEdit = (id) => {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  // Derived counts
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      {/* App heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        React To-Do App
      </h1>

      {/* Input section */}
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>

      {/* Delete All button */}
      {todos.length > 0 && (
        <div className="flex justify-end mb-4">
          <button
            onClick={deleteAll}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Delete All
          </button>
        </div>
      )}

      {/* Task list */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleComplete}
            onDelete={deleteTask}
            onEdit={startEdit}
            editingId={editingId}
            editText={editText}
            onEditTextChange={setEditText}
            onSaveEdit={saveEdit}
          />
        ))}
      </ul>

      {/* Task counts */}
      {todos.length > 0 && (
        <div className="mt-6 flex gap-4 justify-center text-sm text-gray-600">
          <span>Total: <strong>{totalTasks}</strong></span>
          <span>Completed: <strong className="text-green-600">{completedTasks}</strong></span>
          <span>Incomplete: <strong className="text-red-500">{incompleteTasks}</strong></span>
        </div>
      )}
    </div>
  );
}

export default App;
