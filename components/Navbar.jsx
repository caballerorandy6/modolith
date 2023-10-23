"use client";

import Image from "next/legacy/image";
import Link from "next/link";
import { navbar } from "@/lib/arrays";
import { motion } from "framer-motion";
import { FaPhone, FaComment } from "react-icons/fa";
import { linkVariants, navVariants } from "@/lib/framer-motion-animations";
import clsx from "clsx";
import useActiveSection from "@/hooks/useActiveSection";
import useOpenModal from "@/hooks/useOpenModal";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const { setIsOpen } = useOpenModal();

  const handleModal = () => {
    setIsOpen(true);
  };

  return (
    <motion.nav
      className="fixed flex justify-between items-center top-0 w-full z-20 bg-bluezodiac/50 h-24 shadow-lg backdrop-blur-sm"
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <Link href="#hero" className="w-3/12">
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
      <div className="flex gap-4 justify-center items-center w-4/12">
        <motion.div
          variants={linkVariants}
          whileHover="hover"
          className="flex justify-center items-center gap-4 text-white/80 transition-colors bg-rollingstone/50 rounded-full p-4 hover:bg-mongoose/60 cursor-pointer"
        >
          <Link href="tel:+19796656688" className="flex items-center gap-4">
            <p className="font-caveat text-2xl text-white/80">Call us now!</p>
            <FaPhone size={20} />
          </Link>
        </motion.div>
      </div>
      <ul className="flex place-content-end items-center w-5/12 gap-4 mr-8">
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
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
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
        <li>
          <motion.button
            onClick={handleModal}
            className="flex gap-4 items-center font-caveat hover:text-mongoose transition-colors text-2xl cursor-pointer"
            variants={linkVariants}
            whileHover="hover"
          >
            Contact <FaComment size={20} />
          </motion.button>
        </li>
        <ContactModal />
      </ul>
    </motion.nav>
  );
};

export default Navbar;
