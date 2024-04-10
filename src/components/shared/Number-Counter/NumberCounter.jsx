import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const NumberCounter = ({ n, animate }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: animate ? n : 0,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.h3 className="our-impact-number">
      {number.to((n) => n.toFixed(0))}
    </animated.h3>
  );
};

export default NumberCounter;
