import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { AddNewToDo } from "./AddNewToDo";
import { ToDo } from "./listToDo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 style={{padding:"10px", margin:"10px"}}>ToDo App</h1>
      <AddNewToDo />
      {/* @ts-expect-error Server Component */}
      <ToDo />
    </div>
  );
}
