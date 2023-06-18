import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Hook Form",
  description: "React hook form practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black w-full min-h-screen pt-5`}
        suppressHydrationWarning={true}
      >
        <main className=" max-w-[400px] mx-auto bg-white">{children}</main>
      </body>
    </html>
  );
}
