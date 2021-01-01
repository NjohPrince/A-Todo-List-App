import React from 'react';

const Form = ({inputText, todos, setTodos, setInputText}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
      e.preventDefault();
      setTodos([
          ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
      ]);
      setInputText("");
    };
    return (
      <form method="post">
        <input
          value={inputText}  
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="Add To-Do Item"
        />
        <button
          onClick={submitHandler}
          className="todo-button"
          type="submit"
        >
          <i className="plus-square">+</i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
};

export default Form;
