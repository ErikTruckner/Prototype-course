import { useEffect, useMemo, useState, useCallback } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const actionNames = ['Base Stack']

const EarthModel = () => {
  const [scale, setScale] = useState(0.7)

  const earth = useGLTF('./earth/scene.gltf')
  const animations = useAnimations(earth.animations, earth.scene)

  const onScroll = useCallback(() => {
    const percentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight)
    const newScale = 0.7 + 3 * percentage // adjust the scaling factor as desired
    setScale(newScale)
  }, [])

  useEffect(() => {
    actionNames.forEach((actionName) => {
      const action = animations.actions[actionName]
      action.play()
    })

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [animations, onScroll])

  const { scene } = useMemo(() => earth, [earth])

  return (
    <mesh>
      <primitive
        object={scene}
        rotation={[0, -5, 0]}
        position={[0, 0, 0]}
        scale={scale}
      />
    </mesh>
  )
}

export default EarthModel
