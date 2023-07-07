import React, { useRef } from "react";
import { useLocation, useRoutes } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

import SubAbout from "./pages/SubAbout";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function Section({
  children,
  children1,
}: {
  children: React.ReactNode;
  children1: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box className="flex flex-wrap items-center" ref={ref}>
      <Box
        className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </Box>
      <Box
        className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12"
        style={{
          transform: isInView ? "none" : "translateX(1200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children1}
      </Box>
    </Box>
  );
}

const About = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <SubAbout />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;

  const imgDiv = (
    <Box
      className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <img src="images/avatar.jfif" className="w-full" alt="feature_img" />
    </Box>
  );

  const skillDiv = (
    <Box>
      <p className="text-4xl lg:text-5xl text-center text-sky-500 font-bold">
        Skills
      </p>
      <Box className="mt-6">
        <p className="text-lg font-semibold">CSS</p>
        <BorderLinearProgress variant="determinate" value={90} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">Tailwind CSS</p>
        <BorderLinearProgress variant="determinate" value={95} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">HTML</p>
        <BorderLinearProgress variant="determinate" value={100} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">
          React/React Native(Next.js & Vue.js)
        </p>
        <BorderLinearProgress variant="determinate" value={90} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">JavaScript</p>
        <BorderLinearProgress variant="determinate" value={80} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">TypeScript</p>
        <BorderLinearProgress variant="determinate" value={90} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">Node.js</p>
        <BorderLinearProgress variant="determinate" value={60} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">Express</p>
        <BorderLinearProgress variant="determinate" value={70} />
      </Box>

      <Box className="mt-6">
        <p className="text-lg font-semibold">Laravel</p>
        <BorderLinearProgress variant="determinate" value={80} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">Bubble.io</p>
        <BorderLinearProgress variant="determinate" value={60} />
      </Box>
      <Box className="mt-6">
        <p className="text-lg font-semibold">
          WordPress/Shopify/Woocommerce/ ...
        </p>
        <BorderLinearProgress variant="determinate" value={70} />
      </Box>
    </Box>
  );

  return (
    <Box className="container my-24 mx-auto md:px-6 w-3/4" id="about">
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
      <section className="mb-32">
        <Section children={imgDiv} children1={skillDiv} />
      </section>
    </Box>
  );
};

export default About;
