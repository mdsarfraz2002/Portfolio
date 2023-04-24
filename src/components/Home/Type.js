import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "AI Engineer",
          "Deep Learning Engineer",
          "Gamer....",
          "Playboy..call me daddy"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
