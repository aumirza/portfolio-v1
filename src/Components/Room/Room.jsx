import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Room = () => {
  const gltf = useLoader(GLTFLoader, '/scene.glb')

  return (
    <Canvas>
      <Suspense fallback={null}>
        <primitive scale={.2} object={gltf.scene} />
        <ambientLight intensity={1} />
        <OrbitControls autoRotate={true} enableZoom={false} />
      </Suspense>
    </Canvas>
  )
}
