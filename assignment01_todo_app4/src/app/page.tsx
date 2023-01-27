"use client";
import { Inter } from "@next/font/google";
import React from "react";
import ToDoList from "@/components/ToDoList";
import { Box, ColorModeScript, Icon } from "@chakra-ui/react";
import theme from "@/components/theme";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/color-mode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box maxW="4xl" margin={["auto"]} p={5}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Icon aria-label="Toggle Mode" onClick={toggleColorMode}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Icon>
      <ToDoList />
    </Box>
  );
}
