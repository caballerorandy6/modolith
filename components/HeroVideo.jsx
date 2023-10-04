import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { linkVariants, heroVariants } from "@/lib/framer-motion-animations";

function HeroVideo() {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="./modolith.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        <div className="text-white text-center">
          <Heading>Modolith LLC</Heading>

          <p className="text-4xl mb-12 text-white/90 font-caveatbrush">
            Steel Erection Contractor!
          </p>
          <motion.div
            variants={linkVariants}
            whileHover="hover"
            className="flex justify-center"
          >
            <Link
              href="about"
              className="bg-bluezodiac/90 hover:bg-bluezodiac/95 backdrop-blur text-white cursor-pointer px-6 py-4 font-caveatbrush text-xl rounded-full hover:bg-blue-950  transition-colors flex justify-center gap-2 items-center w-[10rem]"
            >
              View More
              <HiArrowDown />
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
    </div>
  );
}

export default HeroVideo;
