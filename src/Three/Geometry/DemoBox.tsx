import { useFrame } from "@react-three/fiber";
import React, { FunctionComponent, useRef } from "react";
import * as THREE from "three";

type Props = JSX.IntrinsicElements["mesh"] & {};

const DemoBox: FunctionComponent<Props> = (props) => {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += 1.0 * delta;
    }
  });
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]}></boxGeometry>
      <meshStandardMaterial color="orange"></meshStandardMaterial>
    </mesh>
  );
};

export default DemoBox;
