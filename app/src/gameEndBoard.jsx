import React from "react";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const ScoreBoard = props => {
  function handleClick() {
    // submitScore();
    window.location.reload();
  }
  const submitScore = () => {
    // let score  = 0;
    // console.log("props on gameEnd ", props);
    // for (let i = 0; i < props.score.length; i++) {
    //   if (props.score[i] === 1) score += 1;
    // }

    Axios.post("/postScore", { player: props.player, score: props.total })
      .then(() => console.log("succuss post score"))
      .catch(() => console.log("fail to post score"));
  };
  return (
    <div>
      <br />
      <br />
      <span>Great Work!</span>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleClick}>
        RESTART GAME
      </Button>
    </div>
  );
};

export default ScoreBoard;
