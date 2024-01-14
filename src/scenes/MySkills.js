import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQueries from "../hooks/useMediaQueries";
import { motion } from "framer-motion";
import skillsPic from "../assets/skills-image.png";
import Skill from "../components/Skill";
const MySkills = () => {
  const isAboveMediumScreens = useMediaQueries("(min-width:1060px)");
  return (
    <section id="skills" className="pt-5 pb-24">
      {/* HEADER AND IMAGE SECTION OF SKILLS PAGE */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl md-5 ">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width={"w-5/12"} />
          <p className="mt-10 mb-7 font-thin">
            Skills that i have aquired with consistent practice and hardwork.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img src={skillsPic} alt="skills" className="z-10" />
            </div>
          ) : (
            <img src={skillsPic} alt="skills" className="z-10" />
          )}
        </div>
      </div>
      {/* LIST YOUR SKILLS HERE */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* SKILL 1 */}
        <motion.div
          className="md:w-1/3 mt-10 flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Programming languages
              </p>
            </div>
            {/* setting the box position */}
            <div className="w-1/2 md:w-full h-24 bg-blue absolute left-0 top-2 z-[-1]" />
          </div>
          <div className="flex flex-wrap justify-start gap-2">
            <Skill text={"Java"} color={"blue"} />
            <Skill text={"Javascript"} color={"blue"} />
            <Skill text={"C++"} color={"blue"} />
            <Skill text={"MYSQL"} color={"blue"} />
          </div>
        </motion.div>

        {/*  SKILL 2 */}
        <motion.div
          className="md:w-1/3 mt-10 flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Dev Skills
              </p>
            </div>
            {/* setting the box position*/}
            <div className="w-1/2 md:w-3/4 h-24 bg-red absolute left-0 top-2 z-[-1]" />
          </div>
          <div className="flex flex-wrap justify-start gap-2">
            <Skill text={"React"} color={"red"} />
            <Skill text={"Redux"} color={"red"} />
            <Skill text={"Redux toolkit"} color={"red"} />
            <Skill text={"HTML"} color={"red"} />
            <Skill text={"CSS"} color={"red"} />
            <Skill text={"Tailwind CSS"} color={"red"} />
          </div>
        </motion.div>

        {/* Skill 3 */}

        <motion.div
          className="md:w-1/3 mt-10 flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tools & Tech
              </p>
            </div>
            {/* setting the box position , , , , ,  */}
            <div className="w-1/2 md:w-3/4 h-24 bg-yellow absolute left-0 top-2 z-[-1]" />
          </div>
          <div className="flex flex-wrap justify-start gap-2">
            <Skill text={"Git"} color={"yellow"} />
            <Skill text={"GitHub"} color={"yellow"} />
            <Skill text={"Eclipse"} color={"yellow"} />
            <Skill text={"VS Code"} color={"yellow"} />
            <Skill text={"IntelliJ"} color={"yellow"} />
            <Skill text={"Postman"} color={"yellow"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
