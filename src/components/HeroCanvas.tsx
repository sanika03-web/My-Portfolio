"use client";

import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Component, Suspense, useRef, type ReactNode } from "react";
import type { Mesh } from "three";

/**
 * Keeps a failure inside the 3D layer from taking the page down with it
 * (no WebGL context, a blocked CDN, an unsupported device).
 */
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/**
 * A single procedural torus knot rendered as frosted glass.
 * The mesh drifts forward on its own axis inside a slow `Float` wrapper.
 */
function GlassTorusKnot() {
  const meshRef = useRef<Mesh>(null);
  const viewport = useThree((state) => state.viewport);

  // Keeps the object a consistent visual size across viewports — it never
  // outgrows the copy on a phone nor swallows the hero on a wide screen.
  const scale = Math.min(viewport.width, viewport.height) / 5.2;

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.x += delta * 0.15;
    mesh.rotation.y += delta * 0.2;
  });

  return (
    <Float
      speed={1}
      rotationIntensity={0.35}
      floatIntensity={1.1}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[1, 0.32, 220, 32, 2, 3]} />
        <MeshTransmissionMaterial
          thickness={1}
          roughness={0.2}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.05}
          anisotropicBlur={0.15}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.08}
          samples={4}
          resolution={256}
          backside
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <SceneBoundary>
      <Canvas
        className="opacity-60"
        // R3F sets `pointer-events: auto` inline, which would beat a
        // Tailwind class — the canvas is decorative, so opt out explicitly.
        style={{ pointerEvents: "none" }}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} />

        {/* The HDR preset is fetched at runtime. Its own Suspense boundary
            keeps the rest of the scene (and the page) from suspending on it,
            and the boundary degrades to plain lighting if the CDN is
            unreachable. */}
        <Suspense fallback={null}>
          <SceneBoundary>
            <Environment preset="city" environmentIntensity={0.55} />
          </SceneBoundary>
        </Suspense>

        <GlassTorusKnot />
      </Canvas>
    </SceneBoundary>
  );
}
