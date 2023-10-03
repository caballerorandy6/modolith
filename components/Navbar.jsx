"use client";

export const navbar = [
  { id: "hero", url: "hero", label: "Home" },
  { id: "about", url: "about", label: "About" },
  { id: "contact", url: "contact", label: "Contact" },
];

import Image from "next/image";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { HiPhone, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  linkVariants,
  hoverInfinitySpringVariants,
} from "@/lib/framer-motion-animations";

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed w-full items-center pl-4 px-10 z-20 bg-black/90 shadow-md">
      <LinkScroll
        to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="w-4/12"
      >
        <Image
          className="cursor-pointer"
          src="/company.png"
          alt="logo"
          width={110}
          height={110}
          priority
        />
      </LinkScroll>

      <div className="flex justify-end items-center gap-10 w-4/12 font-caveat">
        <motion.button
          onClick={() => setModal(true)}
          variants={hoverInfinitySpringVariants}
          whileHover="hover"
          className="flex items-center justify-center gap-3 text-rollingstone hover:text-mongoose transition-colors"
        >
          <p className="text-3xl">Send us a message</p>
          <HiMail className="text-2xl" />
        </motion.button>
        <motion.div variants={hoverInfinitySpringVariants} whileHover="hover">
          <Link
            href="tel: 9796656688"
            className="flex items-center justify-center gap-3 text-rollingstone hover:text-mongoose transition-colors"
          >
            <p className="text-3xl">Call Us</p>
            <HiPhone className="text-2xl" />
          </Link>
        </motion.div>
      </div>

      <ul className="flex justify-end items-center w-4/12 gap-6">
        {navbar.map((link) => (
          <motion.li
            key={link.id}
            variants={linkVariants}
            whileHover="hover"
            className="text-white/80 hover:text-mongoose font-caveatbrush transition-colors text-2xl cursor-pointer"
          >
            <LinkScroll
              to={link.url}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {link.label}
            </LinkScroll>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
