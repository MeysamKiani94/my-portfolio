import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className={`${styles.padding} max-w-4xl mx-auto relative z-0`} //yes, we could apply
        //  this tailwind to the main section. but in here we re animating each section too
      >
        {/* the span is used to make empty space between sections */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* like rendering the children inside another component */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
