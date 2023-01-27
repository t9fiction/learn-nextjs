"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import React from "react";
import ToDoList from "@/components/ToDoList";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <Box maxW='4xl' margin={['auto']} p={5}>
      <ToDoList />
    </Box>
  );
}
