import "./globals.css";

//Fonts
import { caveat, caveatbrush } from "./fonts";

//Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: {
    default: "Modolith LLC",
    template: "% | Modolith LLC",
  },
  description:
    "Steel erection contractor for the Greater Houston area and surrounding counties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen overflow-y-scroll ${caveat.variable} ${caveatbrush.variable}`}
      >
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        <ToastContainer />
      </body>
    </html>
  );
}
