import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/todo-list';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
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
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
