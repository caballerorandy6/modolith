"use client";

import { useEffect } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import { useInView } from "react-intersection-observer";
import Heading2 from "./Heading2";

const Contact = () => {
  const { setActiveSection } = useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="contact" className="min-h-screen">
      <div className="h-4 w-full bg-gradient-to-b from-white/70 via-gray-300 to-bluezodiac/10"></div>
      <Heading2>Contact Us</Heading2>
    </section>
  );
};

export default Contact;
