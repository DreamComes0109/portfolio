import React from "react";
import { Footer as FooterNav } from "flowbite-react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterNav bgDark>
      <div className="w-full">
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-center">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <AiFillFacebook
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillInstagram
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillTwitterCircle
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillGithub
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
            <AiFillDribbbleCircle
              href="#"
              role="button"
              size={40}
              className="hover:text-gray-400 text-gray-500"
            />
          </div>
        </div>
      </div>
    </FooterNav>
  );
};

export default Footer;
