import * as React from "react";
import { motion } from "framer-motion";

interface props {
  i: number;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const menu = ["Home", "About", "Project", "Experience", "Contact"];
const urls = ["/", "/#about", "/#project", "/#experience", "/#contact"];

const homeIcon = (
  <svg
    viewBox="0 -0.5 25 25"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M9.35 19.0001C9.35 19.4143 9.68579 19.7501 10.1 19.7501C10.5142 19.7501 10.85 19.4143 10.85 19.0001H9.35ZM10.1 16.7691L9.35055 16.7404C9.35018 16.75 9.35 16.7595 9.35 16.7691H10.1ZM12.5 14.5391L12.4736 15.2886C12.4912 15.2892 12.5088 15.2892 12.5264 15.2886L12.5 14.5391ZM14.9 16.7691H15.65C15.65 16.7595 15.6498 16.75 15.6495 16.7404L14.9 16.7691ZM14.15 19.0001C14.15 19.4143 14.4858 19.7501 14.9 19.7501C15.3142 19.7501 15.65 19.4143 15.65 19.0001H14.15ZM10.1 18.2501C9.68579 18.2501 9.35 18.5859 9.35 19.0001C9.35 19.4143 9.68579 19.7501 10.1 19.7501V18.2501ZM14.9 19.7501C15.3142 19.7501 15.65 19.4143 15.65 19.0001C15.65 18.5859 15.3142 18.2501 14.9 18.2501V19.7501ZM10.1 19.7501C10.5142 19.7501 10.85 19.4143 10.85 19.0001C10.85 18.5859 10.5142 18.2501 10.1 18.2501V19.7501ZM9.5 19.0001V18.2501C9.4912 18.2501 9.4824 18.2502 9.4736 18.2505L9.5 19.0001ZM5.9 15.6541H5.15C5.15 15.6635 5.15018 15.673 5.15054 15.6825L5.9 15.6541ZM6.65 8.94807C6.65 8.53386 6.31421 8.19807 5.9 8.19807C5.48579 8.19807 5.15 8.53386 5.15 8.94807H6.65ZM3.0788 9.95652C2.73607 10.1891 2.64682 10.6555 2.87944 10.9983C3.11207 11.341 3.57848 11.4302 3.9212 11.1976L3.0788 9.95652ZM6.3212 9.56863C6.66393 9.336 6.75318 8.86959 6.52056 8.52687C6.28793 8.18415 5.82152 8.09489 5.4788 8.32752L6.3212 9.56863ZM5.47883 8.3275C5.13609 8.5601 5.04682 9.02651 5.27942 9.36924C5.51203 9.71198 5.97844 9.80125 6.32117 9.56865L5.47883 8.3275ZM11.116 5.40807L10.7091 4.77804C10.7043 4.78114 10.6995 4.78429 10.6948 4.7875L11.116 5.40807ZM13.884 5.40807L14.3052 4.7875C14.3005 4.78429 14.2957 4.78114 14.2909 4.77804L13.884 5.40807ZM18.6788 9.56865C19.0216 9.80125 19.488 9.71198 19.7206 9.36924C19.9532 9.02651 19.8639 8.5601 19.5212 8.3275L18.6788 9.56865ZM14.9 18.2501C14.4858 18.2501 14.15 18.5859 14.15 19.0001C14.15 19.4143 14.4858 19.7501 14.9 19.7501V18.2501ZM15.5 19.0001L15.5264 18.2505C15.5176 18.2502 15.5088 18.2501 15.5 18.2501V19.0001ZM19.1 15.6541L19.8495 15.6825C19.8498 15.673 19.85 15.6635 19.85 15.6541L19.1 15.6541ZM19.85 8.94807C19.85 8.53386 19.5142 8.19807 19.1 8.19807C18.6858 8.19807 18.35 8.53386 18.35 8.94807H19.85ZM21.079 11.1967C21.4218 11.4293 21.8882 11.3399 22.1207 10.9971C22.3532 10.6543 22.2638 10.1879 21.921 9.9554L21.079 11.1967ZM19.521 8.3274C19.1782 8.09487 18.7119 8.18426 18.4793 8.52705C18.2468 8.86984 18.3362 9.33622 18.679 9.56875L19.521 8.3274ZM10.85 19.0001V16.7691H9.35V19.0001H10.85ZM10.8495 16.7977C10.8825 15.9331 11.6089 15.2581 12.4736 15.2886L12.5264 13.7895C10.8355 13.73 9.41513 15.0497 9.35055 16.7404L10.8495 16.7977ZM12.5264 15.2886C13.3911 15.2581 14.1175 15.9331 14.1505 16.7977L15.6495 16.7404C15.5849 15.0497 14.1645 13.73 12.4736 13.7895L12.5264 15.2886ZM14.15 16.7691V19.0001H15.65V16.7691H14.15ZM10.1 19.7501H14.9V18.2501H10.1V19.7501ZM10.1 18.2501H9.5V19.7501H10.1V18.2501ZM9.4736 18.2505C7.96966 18.3035 6.70648 17.1294 6.64946 15.6257L5.15054 15.6825C5.23888 18.0125 7.19612 19.8317 9.5264 19.7496L9.4736 18.2505ZM6.65 15.6541V8.94807H5.15V15.6541H6.65ZM3.9212 11.1976L6.3212 9.56863L5.4788 8.32752L3.0788 9.95652L3.9212 11.1976ZM6.32117 9.56865L11.5372 6.02865L10.6948 4.7875L5.47883 8.3275L6.32117 9.56865ZM11.5229 6.0381C12.1177 5.65397 12.8823 5.65397 13.4771 6.0381L14.2909 4.77804C13.2008 4.07399 11.7992 4.07399 10.7091 4.77804L11.5229 6.0381ZM13.4628 6.02865L18.6788 9.56865L19.5212 8.3275L14.3052 4.7875L13.4628 6.02865ZM14.9 19.7501H15.5V18.2501H14.9V19.7501ZM15.4736 19.7496C17.8039 19.8317 19.7611 18.0125 19.8495 15.6825L18.3505 15.6257C18.2935 17.1294 17.0303 18.3035 15.5264 18.2505L15.4736 19.7496ZM19.85 15.6541V8.94807H18.35V15.6541H19.85ZM21.921 9.9554L19.521 8.3274L18.679 9.56875L21.079 11.1967L21.921 9.9554Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);

const aboutIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M12 14C12 14 12 13.3223 12 12.5C12 11.6777 15.5 11.5 15.5 9C15.5 7.5 14 6.5 12 6.5C10.5 6.5 9 7.5 9 9"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M13.2271 16.9535C13.2271 17.6313 12.6777 18.1807 11.9999 18.1807C11.3221 18.1807 10.7726 17.6313 10.7726 16.9535C10.7726 16.2757 11.3221 15.7262 11.9999 15.7262C12.6777 15.7262 13.2271 16.2757 13.2271 16.9535Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);

const projectIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g id="Interface / Check">
        {" "}
        <path
          id="Vector"
          d="M6 12L10.2426 16.2426L18.727 7.75732"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>{" "}
    </g>
  </svg>
);

const experienceIcon = (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    enable-background="new 0 0 32 32"
    fill="currentcolor"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <line
        fill="none"
        stroke="currentcolor"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="23"
        y1="26.1"
        x2="23"
        y2="5"
      ></line>{" "}
      <polyline
        fill="none"
        stroke="currentcolor"
        stroke-width="2"
        stroke-miterlimit="10"
        points="18.7,21.8 23,26.1 27.3,21.8 "
      ></polyline>{" "}
      <polyline
        fill="none"
        stroke="currentcolor"
        stroke-width="2"
        stroke-miterlimit="10"
        points="12,15 12,14 9.1,6 8.9,6 6,14 6,15 "
      ></polyline>{" "}
      <line
        fill="none"
        stroke="currentcolor"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="6"
        y1="12"
        x2="12"
        y2="12"
      ></line>{" "}
      <polyline
        fill="none"
        stroke="currentcolor"
        stroke-width="2"
        stroke-miterlimit="10"
        points="5,18 12,18 12,19 6,25 6,26 13,26 "
      ></polyline>{" "}
    </g>
  </svg>
);

const contactIcon = (
  <svg
    viewBox="0 0 48 48"
    id="b"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        stroke="currentColor"
        d="m19.308,12.467c-.4234-1.4115-.7215-2.8773-.8813-4.3843-.1571-1.4812-1.449-2.5826-2.9385-2.5826h-6.9092c-1.7767,0-3.1454,1.5345-2.989,3.3043,1.5754,17.8285,15.7771,32.0302,33.6056,33.6056,1.7698.1564,3.3043-1.2073,3.3043-2.9839v-6.1595c0-2.2488-1.1015-3.5362-2.5826-3.6932-1.507-.1598-2.9728-.4579-4.3843-.8813-1.7266-.5179-3.5957-.0304-4.8704,1.2442l-2.9566,2.9566c-5.326-2.8825-9.7164-7.2729-12.5989-12.5989l2.9566-2.9567c1.2746-1.2746,1.7621-3.1438,1.2442-4.8703Z"
      ></path>
      <line
        stroke="currentColor"
        x1="26.1873"
        y1="34.4116"
        x2="27.706"
        y2="32.8928"
      ></line>
      <line
        stroke="currentColor"
        x1="13.5888"
        y1="21.8131"
        x2="15.1076"
        y2="20.2944"
      ></line>
    </g>
  </svg>
);

const icons = [homeIcon, aboutIcon, projectIcon, experienceIcon, contactIcon];

export const MenuItem = (order: props) => {
  const style = {
    border: `2px solid ${colors[order.i]}`,
    color: `${colors[order.i]}`,
  };
  return (
    <a href={urls[order.i]}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="icon-placeholder" style={style}>
          {icons[order.i]}
        </div>
        <div
          className="text-lg text-center font-semibold w-2/3 rounded-lg"
          style={style}
        >
          {menu[order.i]}
        </div>
      </motion.li>
    </a>
  );
};
