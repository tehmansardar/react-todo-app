import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Breakfast First",
    "Reading Novel",
    "Check Email",
  ]);
  const [input, setInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Welcome to Todo List</h1>
      <form onSubmit={addTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
