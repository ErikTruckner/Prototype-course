import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
//
import StarsAnimated from './StarsAnimated'
//
import About from './About'
import SwiperProjects from './SwiperProjects'
import Hero from './Hero'
import ReactLogo from './canvas/ReactLogo'
import WorkExperience from './WorkExperience'
import Contact from './Contact'
import EarthModel from './canvas/EarthModel'
import { Loader } from '@react-three/drei'

const MasterContainer = () => {
  // Canvas BG color
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000', 1)
  }

  //
  return (
    <>
      <Canvas
        id='canvas'
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={bgColor}>
        <StarsAnimated />
        {/* We need a light to see our gltf model */}

        <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
        <spotLight position={(-20, 50, 10)} intensity={1} color={0x61dbfb} />
        <Suspense fallback={null}>
          {/* React Model */}
          <ReactLogo />

          {/* Earth Model */}
          <EarthModel />
        </Suspense>
      </Canvas>
      <Loader />
      <Hero />
      <About />
      <SwiperProjects />
      <WorkExperience />
      <Contact />
    </>
  )
}

export default MasterContainer
