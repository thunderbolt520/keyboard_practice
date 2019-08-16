import React, { useState } from "react";
import Game from "./game";
import Start from "./start";
import PostScore from "./postScore";

const WelcomePg = () => {
  const [start, setStart] = useState(false);
  const [color, setColor] = useState("");
  const [player, setPlayer] = useState("");

  const clickStart = () => {
    setStart(true);
    setColor("rgba(253, 255, 245, 0.8)");
  };

  return (
    <ul style={{ height: "350px", backgroundColor: color }}>
      {start ? (
        <Game player={player} />
      ) : (
        <div>
          <Start clickStart={clickStart} setPlayer={setPlayer} />
          <PostScore />
        </div>
      )}
    </ul>
  );
};

export default WelcomePg;
