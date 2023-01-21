"use client";
import React from "react";

async function update(id: any, isDone: any) {
  await fetch(`http://localhost:3001/api/todo/update`, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
}

const ToDoo = ({ todo }: any) => {
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

export default ToDoo;
