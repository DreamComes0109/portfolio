import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Box } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Content = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [openHealth, setOpenHealth] = useState(false);

  return (
    <Box className="container my-24 mx-auto md:px-6" id="content">
      <h1 className="text-4xl text-center underline decoration-sky-600 mb-20 font-bold">
        Project
      </h1>
      <section className="mb-32">
        <Box className="mb-16 flex flex-wrap">
          <Box className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
            <Box
              className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img src="images/info/1.png" className="w-full" alt="info" />
            </Box>
          </Box>

          <Box className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            <h3 className="mb-4 text-2xl font-bold">eGroup-Infocenter</h3>
            <p className="mb-6 text-base text-sky-500">
              React(TypeScript) & Node.js
            </p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              I have developed a large-scale project in Taiwan and this project
              is made of the following stack.
              <br /> Frontend: React(Typescript)
              <br /> Backend: Node.js
              <br /> DB: MongoDB
              <br />
              The url is https://dev.egroup-infocenter.com/
            </p>
            <button
              type="button"
              className="text-white mr-4 mt-10 bg-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
              onClick={() => setOpenInfo(true)}
            >
              View More
            </button>

            <a
              href="https://dev.egroup-infocenter.com/"
              className="hover:text-white hover:border-sky-400 ml-4 mt-12 bg-white border-solid border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
            >
              Visit Website
            </a>

            <Lightbox
              open={openInfo}
              close={() => setOpenInfo(false)}
              slides={[
                { src: "images/info/1.png" },
                { src: "images/info/2.png" },
                { src: "images/info/3.png" },
                { src: "images/info/4.png" },
                { src: "images/info/5.png" },
              ]}
            />
          </Box>
        </Box>

        <Box className="mb-16 flex flex-wrap lg:flex-row-reverse">
          <Box className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
            <Box
              className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img src="images/toast/1.png" className="w-full" alt="toast" />
            </Box>
          </Box>

          <Box className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
            <h3 className="mb-4 text-2xl font-bold">Toasted Yolk</h3>
            <p className="mb-6 text-base text-sky-500">Elementor</p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              I have developed and self-designed this project.
              <br />
              The url is https://thetoastedyolk.com/
            </p>

            <a
              href="https://thetoastedyolk.com/"
              className="hover:text-white hover:border-sky-400 mr-4 mt-12 bg-white border-solid border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
            >
              Visit Website
            </a>

            <button
              type="button"
              className="text-white ml-4 mt-10 bg-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
              onClick={() => setOpenToast(true)}
            >
              View More
            </button>

            <Lightbox
              open={openToast}
              close={() => setOpenToast(false)}
              slides={[
                { src: "images/toast/1.png" },
                { src: "images/toast/2.png" },
                { src: "images/toast/3.png" },
                { src: "images/toast/4.png" },
                { src: "images/toast/5.png" },
              ]}
            />
          </Box>
        </Box>

        <Box className="flex flex-wrap">
          <Box className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
            <Box
              className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img src="images/health/1.png" className="w-full" alt="health" />
            </Box>
          </Box>

          <Box className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
            <h3 className="mb-4 text-2xl font-bold">Affinity Care</h3>
            <p className="mb-6 text-base text-sky-500">WordPress</p>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              I have developed this website in two days.
              <br />
              The url is https://www.affinitycaremn.com/
            </p>
            <button
              type="button"
              className="text-white mr-4 mt-10 bg-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
              onClick={() => setOpenHealth(true)}
            >
              View More
            </button>
            <a
              href="
                https://www.affinitycaremn.com/"
              className="hover:text-white hover:border-sky-400 ml-4 mt-12 bg-white border-solid border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
            >
              Visit Website
            </a>

            <Lightbox
              open={openHealth}
              close={() => setOpenHealth(false)}
              slides={[
                { src: "images/health/1.png" },
                { src: "images/health/2.png" },
                { src: "images/health/3.png" },
                { src: "images/health/4.png" },
                { src: "images/health/5.png" },
              ]}
            />
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default Content;
