import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, removeTodo, completeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
