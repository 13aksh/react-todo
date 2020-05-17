import React, { useState } from "react";
import { v4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="tasks"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
