import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        text: text,
        completed: false,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Router>
      <div className="App justify-center flex">
        <div>
        <h1 className='heading'>Todo App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo} />
              </>
            }
          />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
