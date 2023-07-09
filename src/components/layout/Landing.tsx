import React from "react";
import { Link, useLocation, useRoutes } from "react-router-dom";
import { Box } from "@mui/material";

import { AnimatePresence } from "framer-motion";

import SubLanding from "../home/pages/SubLanding";

const Landing = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <SubLanding />,
    },
  ]);

  const location = useLocation();
  if (!element) return null;

  return (
    <section className=" overflow-hidden" id="home">
      <Box className="relative">
        <img
          src="/images/land_bg.jpg"
          className="top-0 w-full h-screen"
          alt="landing page"
        />
        <Box className="absolute top-0 bg-cover w-full h-screen background-radial-gradient opacity-80" />

        <AnimatePresence mode="wait">
          {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </Box>
    </section>
  );
};

export default Landing;
