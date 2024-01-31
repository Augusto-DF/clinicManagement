import { Montserrat } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Clinic Management</title>
      </head>
      <body className={montserrat.className} suppressHydrationWarning>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
