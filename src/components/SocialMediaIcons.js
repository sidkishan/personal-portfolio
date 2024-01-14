import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/siddharth-kishan/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={"30px"} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/sidkishan"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={"30px"} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://leetcode.com/sidkishan/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode size={"30px"} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/sidkishan_"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter size={"30px"} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
