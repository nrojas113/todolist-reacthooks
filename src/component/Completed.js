import React from "react";
import SingleTodo from "./SingleTodo";

function Completed({ completedTodos }) {
  return (
    <section>
      <ul>
        {completedTodos.map((completedTodo) => (
          <SingleTodo key={completedTodo.id} todo={completedTodo} />
        ))}
      </ul>
    </section>
  );
}

export default Completed;
