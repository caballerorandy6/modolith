"use client";

import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import { partners } from "@/lib/arrays";
import { motion } from "framer-motion";
import { linkVariants } from "@/lib/framer-motion-animations";

const MyMarquee = () => {
  return (
    <Marquee
      pauseOnHover={true}
      direction="right"
      loop={0}
      className="bg-gradient-to-b from-white/70 via-gray-300 to-bluezodiac/10 cursor-pointer border-t-2"
    >
      {partners.map((company) => (
        <motion.article
          key={company.name}
          variants={linkVariants}
          whileHover="hover"
        >
          <a href={company.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={company.image}
              alt="bc logo"
              quality="95"
              loading="lazy"
              objectFit="contain"
              width="200"
              height="200"
            />
          </a>
        </motion.article>
      ))}
      <p className="text-4xl font-caveatbrush text-bluezodiac">
        Modolith LLC Partner Companies
      </p>
    </Marquee>
  );
};

export default MyMarquee;
