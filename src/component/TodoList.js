import React from "react";
import SingleTodo from "./SingleTodo";

function TodoList({ todos, toggleComplete }) {
  return (
    <section id="todolist">
      <ul>
        {todos.map((todo) => {
          return (
            <SingleTodo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
      <button>Clear Completed</button>
    </section>
  );
}

export default TodoList;
