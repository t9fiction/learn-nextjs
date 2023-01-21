import { Inter } from "@next/font/google";
import Link from "next/link";
import PocketBase from "pocketbase";

const inter = Inter({ subsets: ["latin"] });

async function getDescription() {
  const pb = new PocketBase("http://127.0.0.1:8090");

  //   const res = await fetch(
  //     "http://127.0.0.1:8090/api/collections/todoapp/records?page=1&perPage=10",
  //     { cache: "no-store" }
  //   );
  //   const data = await res.json();

  // you can also fetch all records at once via getFullList
  const records = await pb
    .collection("todoapp")
    .getFullList(200 /* batch size */, {
      sort: "-created",
    });

  return records;
}

const Home = async () => {
  const todo = await getDescription();
  console.log("ToDo", todo);
  return (
    <>
      <h2>ToDo List</h2>
      <div>
        {todo?.map((e) => {
          console.log("e", e);
          return <ToDo key={e.id} todo={e} />;
        })}
      </div>
    </>
  );
};

function ToDo({ todo }: any) {
  const { id, task, content, created } = todo || {};
  console.log("todo", todo);
  return (
    <Link href={`/todos/${id}`}>
      <h1>---{task}---</h1>
      <div>
        <h5>{created}</h5>
        {/* <p>{content}</p> */}
      </div>
      <br />
    </Link>
  );
}

export default Home;
