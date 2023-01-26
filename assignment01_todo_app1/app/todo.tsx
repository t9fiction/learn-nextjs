"use client";
import React from "react";

async function update(id: any, isDone: any) {
  await fetch(`http://127.0.0.1:3001/api/todo/update`, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
}

const UpdateToDo = ({ todo }: any) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button>del</button>
    </div>
  );
};

export default UpdateToDo;
