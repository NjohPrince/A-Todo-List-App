import React from 'react';
 
const Todo = ({text, todo, todos, setTodos}) => {
  const deleteHandler = () => {
     setTodos(todos.filter(el => el.id !== todo.id))
  }
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">Done</button>
      <button onClick={deleteHandler} className="delete-btn">Delete</button>
    </div>
  );
};

export default Todo;