import { motion } from 'framer-motion';

import { styles }  from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span className="text-[#915eff]">Jacob</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          As a junior Full Stack MERN web developer,<br className="sm:block hidden" /> I am eager to learn and grow while utilizing <br className="sm:block hidden" /> my skills in MongoDB, Express.js, React.js, <br className="sm:block hidden" /> Node.js, and more, to build dynamic <br className="sm:block hidden" /> web applications.
          </p>
        </div>
        
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero