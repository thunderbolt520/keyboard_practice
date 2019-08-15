import React from "react";

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 60, accuracy: "00%" };
    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    setInterval(this.countDown, 100);
  }
  countDown() {
    let { time } = this.state;
    if (time <= 0) {
      clearInterval();
    } else this.setState({ time: (time - 0.1).toFixed(1) });
  }
  render() {
    let { time, accuracy } = this.state;
    return (
      <div>
        <span>Time: {time}</span>
        <br />
        <span>RPM:</span>
        <br />
        <span>Accuracy:{accuracy}</span>
        <br />
        <br />
      </div>
    );
  }
}

export default ScoreCard;
