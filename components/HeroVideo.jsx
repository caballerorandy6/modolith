import { Link as LinkScroll } from "react-scroll";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { linkVariants } from "@/lib/framer-motion-animations";

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
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-white text-center">
          <Heading>Modolith LLC</Heading>
          <p className="text-3xl mb-6 font-caveatbrush text-white/90">
            Steel Erection Contractor!
          </p>
          <motion.div variants={linkVariants} whileHover="hover">
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="bg-bluezodiac text-white cursor-pointer px-6 py-3 mt-4 font-caveat text-2xl rounded-full hover:bg-blue-950 hover:text-mongoose transition-colors"
            >
              View More
            </LinkScroll>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
    </div>
  );
}

export default HeroVideo;
