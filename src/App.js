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
    //initialize the todo state with sample starter data
    const fetchTodos = () => {
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = (userInput) => {
    //assign new id for the new todo obj
    let newId = todos.length + 1;
    //create obj that will become the new todo (intialize with complete status to falses)
    let newTodo = { id: newId, todo: userInput, complete: false };
    //add the new todo obj to existing todos array by making copy
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const toggleComplete = (evt, todo) => {
    //change the complete status to opposite (false <-> true)
    let updatedTodo = { ...todo, complete: !todo.complete };
    //update the changed status todo obj to current todos state
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        todo = updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    //save all the todo obj with status completed to false to variable
    let notCompleted = todos.filter((todo) => todo.complete === false);

    //save all the todo obj with status completed to true to variable
    let completed = todos.filter((todo) => todo.complete !== false);
    //update the id of obj so it will be unique (creating new list)
    completed = completed.map((todo) => (todo = { ...todo, id: uuid() }));

    //save the completedTodos inside completedTodos state (adding on top of what was already included)
    setCompletedTodos([...completedTodos, ...completed]);
    //update the todos state to only the todo obj that has not completed yet
    setTodos(notCompleted);
  };

  const deleteAllTodos = () => {
    //delete all the active todos
    setTodos([]);
  };

  return (
    <div>
      <Header />
      <AddForm input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        clearCompleted={clearCompleted}
        deleteAllTodos={deleteAllTodos}
      />
      <Completed completedTodos={completedTodos} />
    </div>
  );
}

export default App;
