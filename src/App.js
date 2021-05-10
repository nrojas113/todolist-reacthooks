import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import AddForm from "./component/AddForm";
import Completed from "./component/Completed";
import uuid from "react-uuid";

const data = [
  { id: 1, todo: "Laundry", complete: false },
  { id: 2, todo: "Call Chichan", complete: false },
  { id: 3, todo: "Watch Movie", complete: false },
  { id: 4, todo: "Drink Coffee", complete: true },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = () => {
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = (userInput) => {
    let newId = todos.length + 1;
    let newTodo = { id: newId, todo: userInput, complete: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const toggleComplete = (evt, todo) => {
    let updatedTodo = { ...todo, complete: !todo.complete };
    console.log(updatedTodo);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        todo = updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    let notCompleted = todos.filter((todo) => todo.complete === false);
    let completed = todos.filter((todo) => todo.complete !== false);
    completed = completed.map((todo) => (todo = { ...todo, id: uuid() }));
    setCompletedTodos([...completedTodos, ...completed]);
    setTodos(notCompleted);
  };

  return (
    <div>
      <Header />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        clearCompleted={clearCompleted}
      />
      <AddForm input={input} setInput={setInput} addTodo={addTodo} />
      <Completed completedTodos={completedTodos} />
    </div>
  );
}

export default App;
