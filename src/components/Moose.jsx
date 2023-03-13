import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

const Moose = () => {
    const moose = useGLTF('./moose/scene.gltf');
    return (
        <primitive
            object={moose.scene}
            scale={2.5}
            position-y={-1.2}
            rotation-y={0}
        />
    )
}

const MooseCanvas = () => {
    return (
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 25,
          near: 0.1,
          position: [0,10,2]
        }}
      >
        <Suspense fallback={`Loading...`}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Moose />
  
          <Preload all />
        </Suspense>
      </Canvas>
    );
  };

export default MooseCanvas;