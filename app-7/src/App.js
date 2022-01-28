import React from "react";
import { useState } from "react";
import NewTask from "./components/NewTask";
import Todo from "./components/Todo";
import List from "./components/List";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  function handleAddTask(task) {
    setList([...list, task]);
  }

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <NewTask add={handleAddTask} />
      <List tasks={list} />
    </div>
  );
}

export default App;
