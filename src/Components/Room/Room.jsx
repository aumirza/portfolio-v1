import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import scene from "../../Assets/scene.glb";

export const Room = () => {
  const gltf = useLoader(GLTFLoader, scene);

  // show only on when gltf is loaded

  return gltf ? (
    <Canvas>
      <Suspense fallback={null}>
        <primitive scale={0.2} object={gltf.scene} />
        <ambientLight intensity={1} />
        <OrbitControls autoRotate={true} enableZoom={false} />
      </Suspense>
    </Canvas>
  ) : (
    ""
  );
};
