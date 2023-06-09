import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const isMobile = window.innerWidth <= 767
  const delayTime = isMobile ? 2.8 : 1.8

  const h1Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        stiffness: 100,
        duration: 1,
        delay: delayTime,
      },
    },
    hidden: { opacity: 0, scale: 0 },
  }

  const h2Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 0.8,
        delay: delayTime + 0.5,
      },
    },
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
    <section className='w-screen h-screen mx-auto'>
      <div className='absolute left-[5%] top-[5%] xl:left-[14%] xl:top-[14%] mx-auto fredoka-font text-white'>
        <motion.h1
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={h1Variants}
          id='hero-header'
          className='puff-in-center text-5xl lg:text-7xl'>
          Hi, I'm
          <span className='hover-text-glow light-blue-text font-semibold '>
            {' '}
            Erik
          </span>
        </motion.h1>
        <motion.h2
          ref={ref}
          animate={controls}
          initial='hidden'
          variants={h2Variants}
          className='mt-8 text-3xl w-2/3 text-center'>
          I'm a Full Stack 3D React Developer
        </motion.h2>
      </div>
      <div className='absolute flex flex-col bottom-[13%] left-[50%] translate-x-[-50%]'>
        <div className='slide-bottom'>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
          <div className='down-arrow'></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
