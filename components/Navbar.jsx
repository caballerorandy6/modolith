"use client";

import Image from "next/image";
import Link from "next/link";
import { navbar } from "@/lib/arrays";
import { motion } from "framer-motion";
import { linkVariants, navVariants } from "@/lib/framer-motion-animations";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-center items-center gap-8 fixed left-1/2 -translate-x-1/2 top-6 w-4/12 z-20 bg-bluezodiac/50 rounded-full h-20 shadow-lg backdrop-blur-sm"
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
          className="cursor-pointer"
        />
      </Link>
      <ul className="flex justify-center items-center w-6/12 gap-10">
        {navbar.map((link) => (
          <motion.li
            key={link.id}
            variants={linkVariants}
            whileHover="hover"
            className="text-white hover:text-mongoose font-caveat transition-colors text-2xl cursor-pointer"
          >
            <Link href={link.url}>{link.label}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
