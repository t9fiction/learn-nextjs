"use client";
import { Inter } from "@next/font/google";
import { AddNewToDo } from "./AddNewToDo";
import { ListToDo } from "./listToDo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 style={{padding:"10px", margin:"10px"}}>ToDo App</h1>
      <AddNewToDo />
      {/* @ts-expect-error Server Component */}
      <ListToDo />
    </div>
  );
}
