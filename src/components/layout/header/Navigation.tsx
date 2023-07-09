import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

interface props {
  isOpen: boolean;
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = (props: props) => {
  const { isOpen } = props;
  return (
    <motion.ul variants={variants}>
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} isOpen={isOpen} />
      ))}
    </motion.ul>
  );
};

const itemIds = [0, 1, 2, 3, 4];
