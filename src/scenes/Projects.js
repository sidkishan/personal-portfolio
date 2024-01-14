import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { VscGithubAlt } from "react-icons/vsc";
import { IoLinkOutline } from "react-icons/io5";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
//nested animations in list of projects
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const projectDetails1 = {
  tech: "React, Redux, Javascript, HTML, CSS, Firebase",
  details:
    "Designed and deployed an end-to-end fronted app where user can listen to any podcast and creators can add new podcasts as well.",
  github: "https://github.com/sidkishan/podcast-app-react",
  live: "https://siddharth-kishan-podcast-app.netlify.app/",
};
const projectDetails2 = {
  tech: "HTML, CSS, Vanilla javascript",
  details:
    "Designed and deployed a shopping app where i have showcased products in a user-friendly interface by fetching it from Backend API with add to cart and more functionalities",
  github: "https://github.com/sidkishan/f3-project",
  live: "https://sidkishan.github.io/f3-project/index.html",
};
const projectDetails3 = {
  tech: "React, Redux toolkit, JS, Tailwind CSS, and HTML",
  details:
    "Developed a Youtube like app with live YouTube API data and also enhanced the search bar performance with debouncing and caching of recent search data.",
  github: "https://github.com/sidkishan/my-youtube-react",
  live: "https://sidkishan.github.io/my-youtube-react/",
};
const projectDetails4 = {
  tech: "React, Redux toolkit, JS, Tailwind CSS, and HTML",
  details:
    "Developed our good old game called tic tac toe using React library. A very efficient project to master the concept of state management in react.",
  github: "https://github.com/sidkishan/tic-tac-toe-react",
  live: "https://sidkishan.github.io/tic-tac-toe-react/",
};
const projectDetails5 = {
  tech: "React, JS, CSS, and HTML",
  details: "built a basic calculator application using react and javascript.",
  github: "https://github.com/sidkishan/react-calculator-basic",
  live: "https://sidkishan.github.io/react-calculator-basic/",
};
const projectDetails6 = {
  tech: "Javascript, DOM API, CSS, and HTML",
  details:
    "built a basic friend request functionality using html, css, js, dom manipulation.",
  github: "https://github.com/sidkishan/friend-request-functionality",
  live: "https://sidkishan.github.io/friend-request-functionality/",
};

// PROJECT COMPONENT

// title = Project 1
// converted = project-1
const Project = ({ title, image, obj }) => {
  const overlayStyles = `absolute w-full h-full opacity-0 hover:opacity-95 transition duration-500 bg-grey z-30 flex flex-col overflow-y-scroll justify-center px-4 pt-10 text-deep-blue font-playfair`;
  const projectTitle = title.split(" ").join("").toLowerCase();
  const { tech, details, github, live } = obj;
  return (
    <motion.div variants={projectVariant} className="relative md:mb-0 mb-10">
      <div className={overlayStyles}>
        <p className=" text-center text-xl font-playfair font-semibold md:pt-0 pt-16">
          {title}
        </p>

        <p className="pb-2">
          <span className="font-semibold">Tech used: </span>
          {tech}
        </p>
        <p className=" ">{details}</p>
        <div className="flex gap-4 font-semibold">
          <a
            className="hover:opacity-50 transition duration-500 flex py-2 gap-1 items-center "
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <VscGithubAlt size={18} /> Code
          </a>
          <a
            className="hover:opacity-50 transition duration-500 flex px-2 py-2 gap-1 items-center"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            <IoLinkOutline size={18} /> Live Link
          </a>
        </div>
      </div>
      <img src={image} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-28">
      {/* Headings of projects section */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width={"w-1/3"} />
          </div>
        </div>

        <p className="mt-10 mb-10 font-thin">
          My personal projects with deployed links.
        </p>
      </motion.div>
      {/* LIST YOUR PROJECTS */}
      <div className="flex justify-center gap-10">
        <motion.div
          className="! sm:grid sm:grid-cols-3 sm:gap-8 gap-8" //sm:gap-8 gap-8
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <Project
            title="Podcast Application"
            image={project1}
            obj={projectDetails1}
          />
          <Project
            title="Shopping Application"
            image={project2}
            obj={projectDetails2}
          />
          {/* ROW-2 */}
          <Project
            title="My-Youtube App"
            image={project3}
            obj={projectDetails3}
          />
          <Project
            title="Tic Tac Toe Game"
            image={project4}
            obj={projectDetails4}
          />
          <Project
            title="Calculator App"
            image={project5}
            obj={projectDetails5}
          />
          {/* ROW -3  */}
          <Project
            title="Friend request add/regect"
            image={project6}
            obj={projectDetails6}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
