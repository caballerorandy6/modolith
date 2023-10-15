"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navbar } from "@/lib/arrays";
import { motion } from "framer-motion";
import { linkVariants, navVariants } from "@/lib/framer-motion-animations";
import clsx from "clsx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <motion.nav
      className="fixed flex justify-between items-center top-0 w-full z-20 bg-bluezodiac/50 h-24 shadow-lg backdrop-blur-sm"
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <Link href="#hero">
        <Image
          src="/company.png"
          alt="company logo"
          width="130"
          height="130"
          quality="95"
          priority={true}
          className="cursor-pointer ml-4"
        />
      </Link>
      <ul className="flex place-content-end items-center w-6/12 gap-4 mr-8">
        {navbar.map((link) => (
          <motion.li
            key={link.id}
            variants={linkVariants}
            whileHover="hover"
            className="relative px-4 py-2"
          >
            <Link
              href={link.hash}
              className={clsx(
                "hover:text-mongoose font-caveat transition-colors text-2xl cursor-pointer",
                { "text-mongoose": activeSection === link.name }
              )}
              onClick={() => setActiveSection(link.name)}
            >
              {link.name}
              {link.name === activeSection && (
                <motion.span
                  className="bg-rollingstone/30 rounded-xl absolute inset-0 -z-10 "
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
