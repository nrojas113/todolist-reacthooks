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

  useEffect(() => {
    const fetchTodos = () => {
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
  };

  console.log(todos);

  return (
    <div>
      <Header />
      <TodoList todos={todos} />
      <AddForm />
    </div>
  );
}

export default App;
