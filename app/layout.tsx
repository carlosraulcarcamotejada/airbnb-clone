import { FC } from "react";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/Navbar/Navbar";


export const metadata = {
  title: "Airbnb",
  description: "A clone of Airbnb",
};

const font = Nunito({ subsets: ["latin"] });

type prop = {
  children: JSX.Element | JSX.Element[];
};

const RootLayout: FC<prop> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html className="select-none" lang="en">
      <body className={font.className}>
        <Navbar />
      </body>
    </html>
  );
};

export default RootLayout;
