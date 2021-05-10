import React from "react";
import SingleTodo from "./SingleTodo";

function TodoList({ todos, toggleComplete, clearCompleted, deleteAllTodos }) {
  return (
    <section id="todolist">
      <h1>Active Todo List</h1>
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
      <button type="button" onClick={clearCompleted}>
        Clear Completed
      </button>
      <button type="button" onClick={deleteAllTodos}>
        Reset
      </button>
    </section>
  );
}

export default TodoList;
