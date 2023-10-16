import "./globals.css";

//Fonts
import { caveat, caveatbrush } from "./fonts";

//Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

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
        className={`overflow-y-scroll ${caveat.variable} ${caveatbrush.variable} bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black`}
      >
        <ActiveSectionProvider>
          <header>
            <Navbar />
          </header>

          {children}

          <footer>
            <Footer />
          </footer>
        </ActiveSectionProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
