export const rotateVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

export const infiniteSpringVariants = {
  animate: {
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

export const navVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.7 },
  },
};

export const heroVariants = {
  initial: {
    y: 100,

    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.7,
      delay: 0.3,
    },
  },
};

export const arrowDownVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  hover: {
    opacity: 1,
    scale: 1.1,
    transition: { type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 },
  },
  exit: {
    opacity: 0,
    y: 0,
  },
};
