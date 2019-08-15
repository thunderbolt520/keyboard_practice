import React from "react";
import ScoreBoard from "./scoreBoard";

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 3 };
    this.countDown = this.countDown.bind(this);
    this.interval;
  }
  componentDidMount() {
    this.interval = setInterval(this.countDown, 1000);
  }
  countDown() {
    let { time } = this.state;
    if (time <= 0) {
      console.log("1");
      clearInterval(this.interval);
      document.removeEventListener("keydown", this.handleOnPress, false);
      document.removeEventListener("keydown", this.handleOnPress, true);
      routeToScoreBoard();
    } else this.setState({ time: (time - 1).toFixed(0) });
  }
  routeToScoreBoard() {
    return <ScoreBoard />;
  }
  render() {
    let { time } = this.state;
    let { accuracy } = this.props;
    return (
      <div>
        <span>Time: {time}</span>
        <br />
        <span>RPM:</span>
        <br />
        <span>Accuracy:{`${accuracy} %`}</span>
        <br />
        <br />
      </div>
    );
  }
}

export default ScoreCard;
