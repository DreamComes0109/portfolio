import React from "react";
import { Box } from "@mui/material";
import About from "../home/About";
import Project from "../home/Project";
import Testimonial from "../home/Testimonial";

const Landing = () => {
  return (
    <section className="mb-40 overflow-hidden" id="home">
      <Box className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] background-radial-gradient">
        <Box className="flex h-full items-center justify-center">
          <Box className="px-6 text-center text-white md:px-12">
            <h1 className="my-6 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Hi, Very nice to meet you.
            </h1>
            <p className="text-3xl mb-6 font-semibold md:text-4xl, xl:text-5xl">
              I am a full-stack web developer.
            </p>
            <a
              className="my-4 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#!"
              role="button"
            >
              About me
            </a>
          </Box>
        </Box>
      </Box>

      <Box className="mb-40 -mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </Box>
      <About />
      <Project />
      <Testimonial />
    </section>
  );
};

export default Landing;
