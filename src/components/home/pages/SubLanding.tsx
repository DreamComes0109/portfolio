import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import Box from "@mui/material/Box";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const SubLanding = () => {
  return (
    <Box className="absolute top-32 w-full justify-center">
      <Box className="px-6 text-center text-white md:px-12">
        <motion.article
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          >
            <h2 className="my-6 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Hi, Very nice to meet you.
            </h2>
          </motion.h1>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          >
            <p className="text-3xl mb-6 font-semibold md:text-4xl, xl:text-5xl">
              I am a full-stack web developer.
            </p>
          </motion.p>
          <Box className="md:grid md:grid-cols-4 xl:w-1/2 mx-auto">
            <motion.li variants={itemVariants} className="list-none">
              <HashLink
                smooth
                className="my-4 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-slate-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                to="/#about"
                role="button"
              >
                About me
              </HashLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HashLink
                smooth
                className="my-4 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-slate-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                to="/#project"
                role="button"
              >
                My Projects
              </HashLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HashLink
                smooth
                className="my-4 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-slate-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                to="/#experience"
                role="button"
              >
                My Experience
              </HashLink>
            </motion.li>
            <motion.li variants={itemVariants} className="list-none">
              <HashLink
                smooth
                className="my-4 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-slate-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                to="/#contact"
                role="button"
              >
                Contact me
              </HashLink>
            </motion.li>
          </Box>
        </motion.article>
      </Box>
    </Box>
  );
};

export default SubLanding;
