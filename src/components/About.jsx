import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
          
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
          I am pleased to say that I have recently obtained a Full Stack Development certification from the University of Texas at Austin.
          Throughout the program, I gained valuable knowledge and practical experience with the MERN stack,
          acquiring a deep understanding of its core components and structure. Since completing my studies, I have dedicated myself to further honing my skills and
          expanding my expertise by actively pursuing new concepts and techniques. I am excited to apply my knowledge and skills in the field and look forward to the opportunities that lie ahead.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
    </>
  )
}

export default About