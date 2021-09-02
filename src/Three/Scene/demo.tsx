import { Canvas, useThree } from "@react-three/fiber";
import React, { FunctionComponent, useEffect } from "react";
import { Color, Euler } from "three";
import DemoBox from "../Geometry/DemoBox";

const Custom: FunctionComponent = () => {
  const scene = useThree((s) => s.scene);

  useEffect(() => {
    scene.background = new Color(0, 0, 0);
  }, [scene]);
  return null;
};

const DemoScene: FunctionComponent = () => {
  return (
    <Canvas resize={{}}>
      <Custom></Custom>
      <ambientLight></ambientLight>
      <pointLight position={[10, 10, 10]}></pointLight>
      <DemoBox
        rotation={new Euler(0, 90, 0)}
        scale={6}
        position={[0, 0, -10]}
      ></DemoBox>
    </Canvas>
  );
};

export default DemoScene;
