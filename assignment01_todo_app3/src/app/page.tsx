"use client";
import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import { Center, ColorModeScript, Icon, Stack } from "@chakra-ui/react";
import theme from "../components/theme";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";
import AddToDo from "@/components/add-ToDo";
import {ToDoList} from "@/components/todoList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Icon aria-label="Toggle Mode" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Icon>
      <Center flexDir={"column"} pt={["10"]}>
        <Header />
        <AddToDo />
        {/* @ts-expect-error Server Component */}
        <ToDoList />
      </Center>
    </Stack>
  );
}
