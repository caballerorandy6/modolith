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
        className={`min-h-screen overflow-y-scroll ${caveat.variable} ${caveatbrush.variable} bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black`}
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
