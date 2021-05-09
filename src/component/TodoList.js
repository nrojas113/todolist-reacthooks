import React from "react";
import SingleTodo from "./SingleTodo";

function TodoList({ todos }) {
  return (
    <section>
      <ul>
        {todos.map((todo) => {
          return <SingleTodo todo={todo} key={todo.id} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
