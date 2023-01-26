import { Flex, Input, Button } from "@chakra-ui/react";
import React from "react";

const AddToDo = () => {
  return (
    <Flex direction={["column"]}>
      <Input mt={["2"]} />
      <Button mt={["2"]} color={['blue']}>Add ToDo</Button>
    </Flex>
  );
};

export default AddToDo;
