import React from "react";

function AddForm({ setInput, input, addTodo }) {
  const handleChange = (evt) => {
    setInput(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <section id="addform">
      <form onSubmit={handleSubmit}>
        <label>New task</label>
        <input
          type="text"
          value={input}
          placeholder="add new task"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddForm;
