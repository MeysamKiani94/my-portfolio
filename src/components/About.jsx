import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  let direction = "";

  switch (index) {
    case 0:
      direction = "right";
      break;
    case 1:
      direction = "left";
      break;
    case 2:
      direction = "right";
      break;
    case 3:
      direction = "left";
      break;
  }
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn(direction, "spring", index * 0.3, 0.9)}
        className="w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.5, 2)}
        className="mt-4 text-secondary text-[17ps] max-w-3xl leading-[30px]"
      >
        Put your description here Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque veritatis doloribus nemo dolorum ducimus
        dignissimos beatae quaerat distinctio illum atque! Architecto autem nam
        omnis eum fuga qui exercitationem iusto eos.
      </motion.p>
      {/*    the cards*/}
      <div className=" mt-20 grid grid-cols-2  justify-items-center  gap-20 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> //spread all the properties coming from "the service we are currently looping over"
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
