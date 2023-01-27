import {
  Button,
  Input,
  UnorderedList,
  Flex,
  Grid,
  Heading,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["ToDo Assignment", "chakra Assignment", "Web3 Assignment"]);
  const [item, setItem] = useState("");

  function removeItem(taskName) {
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  }

  function addItem() {
    if (item != "" && !tasks.includes(item)) {
      let temp = tasks;
      temp.push(item);
      setTasks(temp);
      setItem("");
    }
  }

  return (
    <Flex
      justifyContent={["center"]}
      alignItems={["center"]}
      flexDirection={["column"]}
      width={["100%"]}
      height={["100%"]}
    >
      <Heading margin="auto">Todo App</Heading>
      <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
        <Input
          placeholder="New todo"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button onClick={addItem}>Add Todo</Button>
      </Grid>
      <UnorderedList>
        {tasks.map((task) => {
          return (
            <ListItem key={task.indexOf(task)} p={["1"]}>
              {task}
              <Button
                ml={["10"]}
                onClick={() => {
                  removeItem(task);
                }}
              >
                x
              </Button>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Flex>
  );
}
export default ToDoList;
