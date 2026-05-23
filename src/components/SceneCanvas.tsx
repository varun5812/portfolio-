import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus, Trail } from "@react-three/drei";
import * as THREE from "three";

function EnergyCore() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.25;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={2}>
        <Trail width={0.4} length={4} color={"#00F5FF"} attenuation={(t) => t * t}>
          <Sphere args={[1.05, 64, 64]}>
            <MeshDistortMaterial
              color="#7B2EFF"
              emissive="#00F5FF"
              emissiveIntensity={1.4}
              roughness={0.05}
              metalness={0.85}
              distort={0.32}
              speed={2.3}
            />
          </Sphere>
        </Trail>
      </Float>
      <Torus args={[1.9, 0.05, 32, 200]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00F5FF" transparent opacity={0.75} />
      </Torus>
      <Torus args={[2.35, 0.04, 32, 200]} rotation={[0.3, 1.2, 0.4]}>
        <meshBasicMaterial color="#ff78d6" transparent opacity={0.45} />
      </Torus>
    </group>
  );
}

export function SceneCanvas() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,245,255,0.16),transparent_45%),rgba(255,255,255,0.03)] shadow-glow">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.6} />
        <directionalLight position={[2, 3, 4]} intensity={2.5} color={"#7af7ff"} />
        <pointLight position={[-3, -2, 2]} intensity={12} color={"#7B2EFF"} />
        <EnergyCore />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,8,22,0.42)_100%)]" />
    </div>
  );
}
