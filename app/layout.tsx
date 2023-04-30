import "./globals.css";
import { Nunito } from "next/font/google";
import {getCurrentUser} from "./actions/getCurrentUser";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";
import { RegisterModal } from "./components/modals/RegisterModal";
import { Navbar } from "./components/Navbar/Navbar";
import { RentModal } from "./components/modals/RentModal";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html className="select-none" lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ReduxProvider>
      </body>
    </html>
  );
}
