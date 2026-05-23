import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sphere,
  Torus,
  Trail
} from "@react-three/drei";
import * as THREE from "three";

function OrbitNodes() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(
    () => [
      [2.6, 0.1, 0.2],
      [-2.2, 0.8, -0.3],
      [0.3, 2.4, 0.5],
      [-0.5, -2.3, -0.1]
    ],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = state.clock.elapsedTime * 0.18;
    group.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <group ref={group}>
      {points.map((point, index) => (
        <mesh key={index} position={point as [number, number, number]}>
          <sphereGeometry args={[0.09, 24, 24]} />
          <meshBasicMaterial color={index % 2 === 0 ? "#7cf2ff" : "#84f8c6"} />
        </mesh>
      ))}
    </group>
  );
}

function EnergyCore() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.25;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
        <Trail width={0.35} length={4} color={"#7cf2ff"} attenuation={(t) => t * t}>
          <Sphere args={[1.04, 64, 64]}>
            <MeshDistortMaterial
              color="#8c7dff"
              emissive="#84f8c6"
              emissiveIntensity={1.1}
              roughness={0.08}
              metalness={0.8}
              distort={0.32}
              speed={2.1}
            />
          </Sphere>
        </Trail>
      </Float>
      <Torus args={[1.95, 0.05, 32, 200]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#7cf2ff" transparent opacity={0.68} />
      </Torus>
      <Torus args={[2.3, 0.035, 32, 200]} rotation={[0.3, 1.2, 0.4]}>
        <meshBasicMaterial color="#ff7bcf" transparent opacity={0.36} />
      </Torus>
      <OrbitNodes />
    </group>
  );
}

export function SceneCanvas() {
  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(124,242,255,0.12),transparent_45%),rgba(255,255,255,0.03)] shadow-glow">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[2, 3, 4]} intensity={2.3} color={"#c2fbff"} />
        <pointLight position={[-3, -2, 2]} intensity={9} color={"#8c7dff"} />
        <pointLight position={[2, 2, 2]} intensity={6} color={"#84f8c6"} />
        <EnergyCore />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.05} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(7,17,31,0.48)_100%)]" />
    </div>
  );
}
