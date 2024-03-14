import React from 'react';

function TodoItem({ todo, removeTodo, completeTodo }) {
  const handleComplete = () => {
    completeTodo(todo.id);
  };

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label>
        <input
        className='checkbox'
          type="checkbox"
          checked={todo.completed}
          onChange={handleComplete}
        />
        {todo.text}
      </label>
      <button onClick={handleDelete} className='delete'>Delete</button>
    </li>
  );
}

export default TodoItem;
