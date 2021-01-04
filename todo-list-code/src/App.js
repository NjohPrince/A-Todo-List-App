import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todo-list';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  return (
    <div>
      <header>
        <h1>Strawby's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
