"use client";
import React, { ReactElement, useEffect, useState } from "react";
import UpdateToDo from "./todo";

const getTodos = async () => {
  let todos = await fetch("http://127.0.0.1:3001/api/todo/list");
  console.log(todos);
  return todos.json();
};

export const ListToDo = async () => {
  const [toDos, setToDos] = useState()
  useEffect(() => {
    const start = async () => {
      const { todos } = await getTodos();
      setToDos(todos)
    };
  }, []);
  
  return (
    <div style={{ padding: "10px", margin: "10px" }}>
      {toDos.map((t: any) => {
        return (
          <li key={t.id} style={{ padding: "10px" }}>
            <UpdateToDo todo={t} />
          </li>
        );
      })}
    </div>
  );
};
