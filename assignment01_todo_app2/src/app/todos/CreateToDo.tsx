"use client";
import PocketBase from "pocketbase";
import { useState } from "react";

export default function CreateToDo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = async () => {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const data = {
      task: title,
      content: content,
    };
    const record = await pb.collection("todoapp").create(data);
  };

  return (
    <form onSubmit={() => create()}>
      <h3>Add a ToDo Task</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
}
