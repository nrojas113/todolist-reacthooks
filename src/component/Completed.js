import React from "react";
import SingleTodo from "./SingleTodo";

function Completed({ completedTodos }) {
  return (
    <section id="completedTodos">
      <h1>Past Completed</h1>
      <ul>
        {completedTodos.map((completedTodo) => (
          <SingleTodo key={completedTodo.id} todo={completedTodo} />
        ))}
      </ul>
    </section>
  );
}

export default Completed;
