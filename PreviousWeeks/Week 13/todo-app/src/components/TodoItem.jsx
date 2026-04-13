function TodoItem({ todo, onToggle, onDelete, onEdit, editingId, editText, onEditTextChange, onSaveEdit }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
      {editingId === todo.id ? (
        // Edit mode
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => onEditTextChange(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-1 mr-3 outline-none"
          />
          <button
            onClick={() => onSaveEdit(todo.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
          >
            Save
          </button>
        </>
      ) : (
        // View mode
        <>
          <span
            onClick={() => onToggle(todo.id)}
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {todo.completed ? "✔ " : ""}
            {todo.text}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(todo)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
