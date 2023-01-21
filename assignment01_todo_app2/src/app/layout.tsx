/* eslint-disable @next/next/no-head-element */
import ChakraWrapper from "../components/_app";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
