import React from "react";
import Button from "@material-ui/core/Button";

let styles = {
  // margin: "20px",
  width: "250px",
  height: "250px",
  backgroundColor: "rgba(253, 255, 245, 0.8)"
};

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <div style={styles}>
        <span>Great Work!</span>
        <br />
        <br />

        <span>Accuracy:</span>
        <br />
        <br />
        <Button variant="contained" color="primary">
          RESTART GAME
        </Button>
        <Button variant="contained" color="primary">
          BACK TO MAIN
        </Button>
      </div>
    );
  }
}

export default ScoreBoard;
