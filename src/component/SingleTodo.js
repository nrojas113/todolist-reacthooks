import React from "react";

function SingleTodo({ todo, toggleComplete }) {
  const complete = todo.complete ? "todo_complete" : "";
  return (
    <li className={complete} onClick={(evt) => toggleComplete(evt, todo)}>
      {todo.todo}
    </li>
  );
}

export default SingleTodo;
