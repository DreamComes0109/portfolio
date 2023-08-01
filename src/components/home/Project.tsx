import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { motion, Variants } from "framer-motion";

import SubProject, { Props as SubProjectProps } from "./pages/SubProject";

interface CardProps {
  project: React.ReactNode;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ project }: CardProps) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {[project]}
      </motion.div>
    </motion.div>
  );
}

const Content = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [openHealth, setOpenHealth] = useState(false);
  const [openBubble, setOpenBubble] = useState(false);

  const infos: SubProjectProps[] = [
    {
      title: "eGroup-Infocenter",
      stack: "React(TypeScript) & Node.js",
      content: (
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          I have developed a large-scale project in Taiwan and this project is
          made of the following stack.
          <br /> Frontend: React(Typescript)
          <br /> Backend: Node.js
          <br /> DB: MongoDB
          <br />
          The url is https://dev.egroup-infocenter.com/
        </p>
      ),
      imgSrc: "images/info",
      imgNum: 5,
      isVisit: true,
      link: "https://dev.egroup-infocenter.com/",
    },
    {
      title: "Toasted Yolk",
      stack: "Elementor",
      content: (
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          I have developed and self-designed this project.
          <br />
          The url is https://thetoastedyolk.com/
        </p>
      ),
      imgSrc: "images/toast",
      imgNum: 5,
      isVisit: true,
      link: "https://thetoastedyolk.com/",
    },
    {
      title: "Affinity Care",
      stack: "WordPress",
      content: (
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          I have developed this website in two days.
          <br />
          The url is https://www.affinitycaremn.com/
        </p>
      ),
      imgSrc: "images/health",
      imgNum: 5,
      isVisit: true,
      link: "https://www.affinitycaremn.com/",
    },
    {
      title: "My Bubble.io Work History",
      stack: "bubble.io",
      content: (
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          I made this landing page for 5 hours.
          <br />
          The website that I had to clone. &nbsp;&nbsp;
          <Link to="https://podly.co" className="text-sky-500">
            https://podly.co
          </Link>
        </p>
      ),
      imgSrc: "images/bubble",
      imgNum: 5,
      isVisit: false,
    },
    {
      title: "GalacTech",
      stack: "svelte",
      content: (
        <p className="mb-6 text-neutral-500 dark:text-neutral-300">
          I had to add svelte carousels to this svelte website. The figma was
          ready and I developed the carousel-part pixel perfectly. I have done
          this project within 2 hours.
          <br />
          The url is https://galactech.io/
        </p>
      ),
      imgSrc: "images/galactech",
      imgNum: 6,
      isVisit: true,
      link: "https://galactech.io/",
    },
  ];

  const projects = infos.map((info, idx) => (
    <SubProject
      title={info.title}
      stack={info.stack}
      content={info.content}
      imgSrc={info.imgSrc}
      imgNum={info.imgNum}
      isVisit={info.isVisit}
      idx={idx}
      link={info.link}
    />
  ));

  return (
    <Box className="bg-gray-200 dark:bg-gray-700">
      <Box className="container py-24 mx-auto md:px-6" id="project">
        <h2 className="text-4xl lg:text-6xl text-center text-violet-700 underline decoration-sky-600 mb-20 font-bold">
          Project
        </h2>
        <section className="mb-32">
          {projects.map((project) => (
            <Card project={project} />
          ))}
        </section>
      </Box>
    </Box>
  );
};

export default Content;
