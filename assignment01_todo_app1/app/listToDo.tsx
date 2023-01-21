import React, { ReactElement } from "react";
import ToDoo from "./todo";

const getTodos = async () => {
  let todos = await fetch("http://localhost:3001/api/todo/list");
  console.log(todos);
  return todos.json();
};

export const ToDo = async () => {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      {todos.map((t: any) => {
        return (
          <li key={t.id} style={{ padding: "10px" }}>
            <ToDoo todo={t} />
          </li>
        );
      })}
    </div>
  );
};
