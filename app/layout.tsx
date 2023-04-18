import { FC, ReactNode } from "react";
import "./globals.css";
import { Nunito } from "next/font/google";
import { Navbar } from "./components/Navbar/Navbar";
import { ReduxProvider } from "./providers/ReduxProvider";
import { RegisterModal } from "./components/modals/RegisterModal";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "A clone of Airbnb",
};

const font = Nunito({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html className="select-none" lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ReduxProvider>
      </body>
    </html>
  );
}
