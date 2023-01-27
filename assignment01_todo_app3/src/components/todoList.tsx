"use client";
import React, { useEffect, useState } from "react";
import { ListItem, List } from "@chakra-ui/react";

// const getToDos = async () => {
//   let todos = await fetch("http://127.0.0.1:3001/api/todo/list");
//   return todos.json();
// };

export const ToDoList = async () => {
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    try {
      let todos = await fetch("http://127.0.0.1:3001/api/todo/list");
      console.log(todos)
      let todoValue = todos.json()
      setPosts(todoValue);
    } catch (err) {
        console.log(err);
    }
  }

  // const {todos} = await getToDos()

  useEffect(() => {
    
  fetchData();
  }, []);

  return (
    <List mt={["4"]} spacing={3}>
      {posts.map((t) => {
        return <ListItem color="blue.800">{t.name}</ListItem>;
      })}
    </List>
  );
};

// export function ToDoList();
