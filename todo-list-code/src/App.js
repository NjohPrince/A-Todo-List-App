import React, { useState } from 'react';
import './App.css';
import Form from './components/form';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <header>
        <h1>Strawby's Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
    </div>
  );
}

export default App;
