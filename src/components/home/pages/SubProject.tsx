import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { Box } from "@mui/material";
import { link } from "fs";

export interface Props {
  title?: string;
  stack?: string;
  content?: React.ReactNode;
  imgSrc: string;
  imgNum: number;
  isVisit?: boolean;
  idx?: number;
  link?: string;
}

const SubProject = (props: Props) => {
  const {
    title,
    stack,
    content,
    imgSrc,
    imgNum,
    isVisit = false,
    idx,
    link,
  } = props;
  const [openInfo, setOpenInfo] = useState(false);
  const lightboxs: SlideImage[] = [];
  for (let i = 1; i <= imgNum; i++) {
    lightboxs.push({ src: `${imgSrc}/${i}.png` });
  }

  const rightBox = (
    <Box className="mb-16 flex flex-wrap items-center lg:flex-row-reverse">
      <Box className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
        <Box
          className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={`${imgSrc}/1.png`} className="w-full" alt={stack} />
        </Box>
      </Box>

      <Box className="w-full text-center md:text-right grow-0 basis-auto lg:w-6/12 lg:pr-6">
        <h3 className="mb-4 text-2xl font-bold">{title}</h3>
        <p className="mb-6 text-base text-sky-500">{stack}</p>

        {content}

        <button
          type="button"
          className="text-white ml-4 mt-10 bg-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
          onClick={() => setOpenInfo(true)}
        >
          View More
        </button>

        {isVisit && (
          <Link
            to={link || ""}
            className="hover:text-white hover:border-sky-400 ml-4 mt-12 bg-white border-solid border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
            target="_blank"
          >
            Visit Website
          </Link>
        )}

        <Lightbox
          open={openInfo}
          close={() => setOpenInfo(false)}
          slides={lightboxs}
        />
      </Box>
    </Box>
  );
  const leftBox = (
    <Box className="mb-16 flex flex-wrap">
      <Box className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <Box
          className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img src={`${imgSrc}/1.png`} className="w-full" alt="info" />
        </Box>
      </Box>

      <Box className="w-full items-center text-center md:text-left shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 className="mb-4 text-2xl font-bold">{title}</h3>
        <p className="mb-6 text-base text-sky-500">{stack}</p>
        {content}
        <button
          type="button"
          className="text-white mr-4 mt-10 bg-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
          onClick={() => setOpenInfo(true)}
        >
          View More
        </button>

        {isVisit && (
          <Link
            to={link || ""}
            className="hover:text-white hover:border-sky-400 ml-4 mt-12 bg-white border-solid border-2 border-sky-500 text-sky-500 rounded-lg hover:bg-sky-400 px-4 py-2 text-lg"
            target="_blank"
          >
            Visit Website
          </Link>
        )}

        <Lightbox
          open={openInfo}
          close={() => setOpenInfo(false)}
          slides={lightboxs}
        />
      </Box>
    </Box>
  );

  return (idx || 0) % 2 === 0 ? leftBox : rightBox;
};

export default SubProject;
