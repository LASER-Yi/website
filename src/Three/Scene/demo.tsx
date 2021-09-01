import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import DemoBox from "../Geometry/DemoBox";

interface Props {}

const DemoScene: FunctionComponent<Props> = (props) => {
  return (
    <Canvas>
      <camera></camera>
      <ambientLight></ambientLight>
      <pointLight position={[10, 10, 10]}></pointLight>
      <DemoBox position={[1, 0, 0]}></DemoBox>
    </Canvas>
  );
};

export default DemoScene;
