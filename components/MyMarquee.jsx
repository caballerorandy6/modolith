"use client";

import Link from "next/link";
import Image from "next/image";
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
      className="bg-gradient-to-t from-white/70 via-gray-300 to-bluezodiac/10 cursor-pointer"
    >
      {partners.map((company) => (
        <motion.article
          key={company.name}
          variants={linkVariants}
          whileHover="hover"
          className="mb-6 mt-8"
        >
          <Link href={company.url}>
            <Image
              src={company.image}
              alt="bc logo"
              quality="95"
              loading="lazy"
              objectFit="contain"
              width="200"
              height="200"
            />
          </Link>
          <h2 className="text-bluezodiac text-xl font-caveatbrush">
            {company.name}
          </h2>
        </motion.article>
      ))}
      <p className="text-4xl font-caveatbrush text-bluezodiac">
        Modolith LLC Partner Companies
      </p>
    </Marquee>
  );
};

export default MyMarquee;
