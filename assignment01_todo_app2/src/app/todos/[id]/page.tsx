"use client";
import React from "react";

async function getToDo(todoId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/todoapp/records/${todoId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();

  return data;
}

const ToDoPage = async ({ params }: any) => {
  const todo = await getToDo(params.id);
  const id_ = todo.id
  return (
    <div>
      <h1>Task/{todo.id}</h1>
      <h3>{todo.task}</h3>
      <h5>{todo.content}</h5>
      <p>{todo.created}</p>
    </div>
  );
};

export default ToDoPage;
