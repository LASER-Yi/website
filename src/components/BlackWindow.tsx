import { animated, useSpring } from "@react-spring/web";
import React, { FunctionComponent } from "react";

interface Props {}

const Component: FunctionComponent<Props> = () => {
  const styles = useSpring({
    loop: false,
    delay: 500,
    from: {
      width: "0rem",
    },
    to: {
      width: "15rem",
    },
  });

  return (
    <animated.div className="h-32 bg-gray-900" style={styles}></animated.div>
  );
};

export default Component;
