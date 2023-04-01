import React, { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import '../index.css'

const About = () => {
  const aboutVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  }
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <section className='relative w-screen h-screen mt-20'>
      {/* <AboutCanvas /> */}
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={aboutVariants}
        className='absolute  left-[0%]  ml-3 mr-3 md:left-[10%] xl:left-[25%] md:w-1/2 xl:w-1/3  text-white py-3  glowing-shadow border rounded-lg text-center glass-background'>
        <h1 className='text-5xl lg:text-7xl fredoka-font'>
          About
          <span className=' light-blue-text font-semibold '> Me</span>
        </h1>
        <p className='mt-8 mx-3 text-base font-serif'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est
          culpa? In soluta, odit error harum at dicta reiciendis accusamus quod
          consequuntur aperiam possimus repudiandae neque aspernatur inventore
          labore illum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi aspernatur, nesciunt ipsum iure quos eaque, cupiditate iusto
          nulla facilis tempore dolores perspiciatis explicabo doloremque ullam
          facere non vel enim saepe! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iusto error voluptatem totam, vel rem ipsa ut fuga!
          Repellat dicta voluptatem odit sapiente, nulla ducimus aliquid
          nesciunt! Vero dolorum deserunt eos!
        </p>
      </motion.div>
      <div className=' absolute flex flex-col  bottom-[20%] left-[50%] translate-x-[-50%]'>
        <div className='slide-bottom'>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
        </div>
      </div>
    </section>
  )
}

export default About
