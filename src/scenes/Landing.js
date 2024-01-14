import React from "react";
import useMediaQueries from "../hooks/useMediaQueries";
import { motion } from "framer-motion";
import profilePicture from "../assets/profile-img-ai.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { HiOutlineExternalLink } from "react-icons/hi";

const Landing = ({ setSelectedPage }) => {
  const isAboveLargeScreens = useMediaQueries("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* IMAGE SECTION FIRST bcoz BECAUSE IN MOBILE VIEW IMG WILL BE AT TOP */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveLargeScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-14 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              src={profilePicture}
              alt="profile-pic"
              className="hover:filter contrast-125 hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px] rounded-t-full"
            />
          </div>
        ) : (
          <img
            src={profilePicture}
            alt="profile-pic"
            className="hover:filter contrast-125 hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px] rounded-t-full"
          />
        )}
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        {/* initial: initial condition of paragraph(initial status), whileInView: final condition of paragraph(final status), viewport- once: run animation once, amount: means atleast 50% of paragraph should be visible then animation will run */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Siddharth {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 
              xs:before:content-brush before:absolute before:-left-[28px] before:-top-[74px] before:z-[-1]"
            >
              Kishan
            </span>
          </p>
          <p className="mt-10 mb-7 text-md text-center md:text-start font-thin">
            Hi, I am a software engineer, frontend developer and a lifelong
            learner of new and emerging technologies. Currently, I am working at
            Wipro (Bangalore office) as a Project Engineer for more than a year.
            My expertise is developing robust web applications using MERN stack.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <a
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="https://drive.google.com/file/d/1hADFIkcjpn88d2hrqIUvlWquz9aeR5t-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center gap-2 font-playfair px-10">
              <HiOutlineExternalLink size={22} /> Resume
            </div>
          </a>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
