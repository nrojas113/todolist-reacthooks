import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import TodoList from "./component/TodoList";
import AddForm from "./component/AddForm";

const data = [
  { id: 1, todo: "Laundry", complete: false },
  { id: 2, todo: "Call Chichan", complete: false },
  { id: 3, todo: "Watch Movie", complete: false },
  { id: 4, todo: "Drink Coffee", complete: true },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

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

  return (
    <div>
      <Header />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddForm input={input} setInput={setInput} addTodo={addTodo} />
    </div>
  );
}

export default App;
