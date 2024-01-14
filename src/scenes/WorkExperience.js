import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const workExStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
  return (
    <section id="workexp" className="pt-28 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl md-5 text-red">
          WORK EXPERIENCE
        </p>
        <LineGradient width={"w-4/5"} />
        <p className="mt-10 font-thin">
          Below are my journey so far as a working professional.
        </p>
      </motion.div>
      {/* LIST YOUR WORK EXP HERE */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${workExStyles} before:content-job1 `}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“</p>
          <p className="text-left text-md font-playfair">
            Currently, I am working full-time in wipro as a project engineer. My
            work includes developing user-friendly dashboards, and interfaces
            using react library. Worked on some internal projects and added new
            feature to enhance user experience on our web apps.
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${workExStyles} before:content-job2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“</p>
          <p className="text-left text-md font-playfair">
            I was working at coding ninjas as a teaching assistant in DBMS and
            MYSQL course where i got the opportunity to help more than 150
            students with their Coding, DBMS, and MySQL doubts.
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${workExStyles} before:content-job3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-4xl">“</p>
          <p className="text-left text-md font-playfair">
            I did my internship at cognizant as a programmer analyst trainee
            during my final semester of college. I majorly worked on
            technologies like Core Java, HTMl, CSS, Javascript, React and MySQl.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
