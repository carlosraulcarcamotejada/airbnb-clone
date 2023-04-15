import { FC, ReactNode } from "react";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/Navbar/Navbar";
import { ReduxProviders } from "./providers/ReduxProvider";
import { RegisterModal } from "./components/modals/RegisterModal";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";

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
  children: ReactNode;
}): JSX.Element => {
  return (
    <html className="select-none" lang="en">
      <body className={font.className}>
        <ReduxProviders>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ReduxProviders>
      </body>
    </html>
  );
};

export default RootLayout;
