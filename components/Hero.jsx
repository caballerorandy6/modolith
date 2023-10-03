"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import HeroVideo from "./HeroVideo";

const Hero = () => {
  const [modal, setModal] = useState(false);
  return (
    <section
      id="hero"
      className="w-full min-h-screen overflow-y-scroll  bg-cover object-cover"
    >
      <HeroVideo />
    </section>
  );
};

export default Hero;
