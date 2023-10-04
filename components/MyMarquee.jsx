"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { linkVariants } from "@/lib/framer-motion-animations";

const companies = [
  {
    name: "Advon Construction",
    url: "https://advonconstruction.com/",
    image: (
      <Image
        src="/advon-logo.png"
        alt="advon logo"
        width={250}
        height={250}
        priority
      />
    ),
  },
  {
    name: "Brazosport College",
    url: "https://brazosport.edu/",
    image: (
      <Image
        src="/bc-logo.png"
        alt="bc logo"
        width={250}
        height={250}
        priority
      />
    ),
  },
  {
    name: "G&L Construction",
    url: "https://www.glconstructionco.com/",
    image: (
      <Image
        src="/gl-logo.webp"
        alt="bc logo"
        width={250}
        height={250}
        priority
      />
    ),
  },
  {
    name: "METCO Engineering",
    url: "https://www.metcoengineering.com/",
    image: (
      <Image
        src="/metco-logo.png"
        alt="bc logo"
        width={250}
        height={250}
        priority
      />
    ),
  },
  {
    name: "Patriot Development & Construction",
    url: "https://www.patriotdevelopment.com/",
    image: (
      <Image
        src="/patriot-logo.png"
        alt="bc logo"
        width={250}
        height={250}
        priority
      />
    ),
  },
];

const MyMarquee = () => {
  return (
    <Marquee pauseOnHover={true} direction="right" loop={0}>
      {companies.map((company) => (
        <article
          key={company.name}
          className="flex flex-col items-center justify-center gap-2"
        >
          {company.image}
          <h2 className="text-mongoose text-lg">{company.name}</h2>
          <p>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link
                href={company.url}
                target="_blank"
                className="font-caveat text-2xl hover:text-rollingstone transition-colors"
              >
                Visit Website...
              </Link>
            </motion.div>
          </p>
        </article>
      ))}
    </Marquee>
  );
};

export default MyMarquee;
