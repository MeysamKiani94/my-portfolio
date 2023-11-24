import {motion} from "framer-motion";

import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import {slideIn, fadeIn} from "../utils/motion.js";
import {TypeEffect} from "./index.js";


const Hero = () => {


   return (
    <section className={`relative w-full h-screen mx-auto`}>
       {/*todo: animate this div*/}
       <div
        className={`absolute inset-0 sm:top-20 top-16 mb-3 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
       >
          {/* The dot and the line */}
          <div className="flex flex-col justify-center items-center mt-5">
             <div className="w-5 h-5 rounded-full bg-[#e58125]"/>
             <div className="w-1 sm:h-80 h-40 orange-gradient"/>
          </div>

          <div>
             <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#e58125]">Meysam</span>
             </h1>
             <TypeEffect/>
          </div>
       </div>

       {/*todo: add something here*/}

       <div className='absolute inset-0 bottom-12 top-10 max-w-7xl mx-auto'>
          <ComputersCanvas/>
       </div>


       <div
        className="absolute xs:bottom-10 bottom-1 w-full flex justify-center items-center">
          <a href="#about">
             <div
              className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                 animate={{
                    y: [0, 24, 0],
                 }}
                 transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                 }}
                 className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
             </div>
          </a>
       </div>
    </section>
   );
};

export default Hero;
