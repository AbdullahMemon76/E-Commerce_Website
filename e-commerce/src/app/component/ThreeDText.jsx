"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function ThreeDTextComponent() {
  // Local Matcap texture load karna
  const texture = useLoader(THREE.TextureLoader, "/textures/12.png");
  // Text reference
  const textRef = useRef();

  return (
    <Suspense fallback={null}>
      <Center>
        <Text3D
          ref={textRef}
          font="/helvetiker_regular.typeface.json"
          size={0.1}
          height={0.1}
          curveSegments={4}
        >
          ONLINE
          SHOPPING
          <meshMatcapMaterial matcap={texture} />
        </Text3D>
      </Center>
    </Suspense>
  );
}

export default function ThreeDText() {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen flex items-center justify-center">
        {/* Yahan aap additional content add kar sakte hain */}
      </div>
      <div className="w-1/2 h-[550px]">
        <Canvas camera={{ position: [1, 1, 4], fov: 15 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[1, 0, 0]} />
          <ThreeDTextComponent />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            autoRotate={false}
          />
        </Canvas>
      </div>
    </div>
  );
}
