import "./globals.css";
import { Nunito } from "next/font/google";
import { getCurrentUser } from "./actions/getCurrentUser";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";
import { RegisterModal } from "./components/modals/RegisterModal";
import { Navbar } from "./components/Navbar/Navbar";
import { RentModal } from "./components/modals/RentModal";
import {Footer} from "./components/footer/Footer";


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
       <head>
       <title>Airbnb Clone</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={font.className}>
        <ReduxProvider>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28 ">{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
