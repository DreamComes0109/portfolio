import React from "react";

import Box from "@mui/material/Box";

import { useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  children1?: React.ReactNode;
}

const MotionSection = (props: Props) => {
  const { children, children1 } = props;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box ref={ref}>
      <Box
        style={{
          transform: isInView ? "none" : "translateX(1200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </Box>
      <Box
        style={{
          transform: isInView ? "none" : "translateX(-1200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children1}
      </Box>
    </Box>
  );
};

export default MotionSection;
