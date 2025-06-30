import React from 'react'
import heroImg from '../assets/hero.webp'
import { FaArrowCircleRight } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import { fadeIn } from './Utility/AnimationVariants';

const Hero = () => {
  return (
    <section id='home' className='bg-heroBg text-white flex  items-center pt-28 md:h-screen'>
      <div className='container mx-auto flex flex-col md:flex-row  items-center justify-between p-8 overflow-y-hidden gap-12 md:gap-6 h-full'>

        {/* Left-side */}
        <motion.div 
        variants={fadeIn('down', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className="md:w-1/2">
         <h1 className='text-4xl font-secondary font-bold mb-4 lg:w-5/6 xl:w-2/3 md:w-2/3 leading-snug'>Start Your Journey to Mental Wellness</h1>
         <p className='text-lg mb-12 md:pr-8'>We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. let us walk you through the basics in our new mindful guide on how to meditate</p>

         {/* button */}
         <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
          <a href="#contact" className='flex gap-2 items-center'>
            <span>Get Started</span>
            <FaArrowCircleRight />
          </a>
         </button>
        </motion.div>
        {/* Right-side */}
        <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        className="md:w-1/2 h-auto">
          <img src={heroImg} alt="heroImage" className='md:w-3/5 object-contain' />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero