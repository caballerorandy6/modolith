import "./globals.css";

//Fonts
import { caveat, caveatbrush } from "./fonts";

//Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { ModolithProvider } from "@/context/ModolithProvider";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`min-h-screen overflow-y-scroll ${caveat.variable} ${caveatbrush.variable} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-bluezodiac-100 via-blue-300 to-bluezodiac-500`}
      >
        <header>
          <Navbar />
        </header>

        <ModolithProvider>{children}</ModolithProvider>

        <footer>
          <Footer />
        </footer>
        <ToastContainer />
      </body>
    </html>
  );
}
