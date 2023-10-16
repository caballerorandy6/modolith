"use client";

import { useEffect } from "react";
import useActiveSection from "@/hooks/useActiveSection";
import { useInView } from "react-intersection-observer";

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
    <section ref={ref} id="contact" className="min-h-screen ">
      Contact
    </section>
  );
};

export default Contact;
