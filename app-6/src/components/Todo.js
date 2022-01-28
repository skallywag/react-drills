import React from "react";

function Todo({ todo, onComplete }) {
  return (
    <p onClick={() => onComplete()} style={{ cursor: "pointer" }}>
      {todo}
    </p>
  );
}

export default Todo;
