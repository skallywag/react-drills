import React from "react";
import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([""]);

  function inputHandler(value) {
    setTodo(value);
  }

  function addTodoHandler(newTodo) {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
    setTodo("");
  }

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input
        onChange={(e) => inputHandler(e.target.value)}
        placeholder="Enter a new task"
        type="text"
        value={todo}
      />
      <button onClick={() => addTodoHandler(todo)}>Add</button>
      <br />
      {todoList.map((todoItem, idx) => {
        return (
          <Todo
            key={idx}
            todo={todoItem}
            onComplete={() => {
              setTodoList((prevTodoList) =>
                prevTodoList.filter((taskC) => taskC !== todoItem)
              );
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
