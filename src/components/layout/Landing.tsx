import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import About from "../home/About";
import Project from "../home/Project";
import Experience from "../home/Experience";

const Landing = () => {
  return (
    <section className=" overflow-hidden" id="home">
      <Box className="relative">
        <img
          src="/images/land_bg.jpg"
          className="top-0 w-full h-screen"
          alt="landing page"
        />
        <Box className="absolute top-0 bg-cover w-full h-screen background-radial-gradient opacity-80" />
        <Box className="absolute top-32 w-full justify-center">
          <Box className="px-6 text-center text-white md:px-12">
            <h1 className="my-6 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Hi, Very nice to meet you.
            </h1>
            <p className="text-3xl mb-6 font-semibold md:text-4xl, xl:text-5xl">
              I am a full-stack web developer.
            </p>
            <Link
              className="my-4 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              to="/about"
              role="button"
            >
              About me
            </Link>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Landing;
