import React from 'react'

export const getToDos = async () => {
    let todos = await fetch("http://127.0.0.1:3001/api/todo/list");
    console.log(todos)
    return todos.json();
  };
