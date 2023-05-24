import "./globals.css";
import { Nunito } from "next/font/google";
import { getCurrentUser } from "./actions/getCurrentUser";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ToasterProvider } from "./providers/ToasterProvider";
import { LoginModal } from "./components/modals/LoginModal";
import { RegisterModal } from "./components/modals/RegisterModal";
import { Navbar } from "./components/navbar/Navbar";
import { RentModal } from "./components/modals/RentModal";
import { Footer } from "./components/footer/Footer";
import { FooterModal } from "./components/modals/FooterModal";
import { SearchModal } from "./components/modals/SearchModal";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
  icons: {
    icon: '/icon.png',
  },
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
          <FooterModal />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28 gap-2">{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

