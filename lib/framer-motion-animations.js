export const rotateVariants = {
  initial: {
    rotate: 0, // Initial rotation angle (in degrees)
  },
  animate: {
    rotate: 360, // Final rotation angle (in degrees)
    transition: {
      duration: 2, // Animation duration in seconds
      ease: "linear", // You can use other easing functions as well
      repeat: Infinity,
    },
  },
};

export const linkVariants = {
  hover: {
    scale: 1.2,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

export const hoverInfinitySpringVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export const navigationVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
  exit: {
    x: "100vw",
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
};
