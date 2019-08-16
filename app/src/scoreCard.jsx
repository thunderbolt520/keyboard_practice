import React, { useEffect, useState } from "react";

class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 30 };
    this.countDown = this.countDown.bind(this);
    this.interval;
  }
  componentDidMount() {
    this.interval = setInterval(this.countDown, 1000);
  }
  countDown() {
    let { time } = this.state;
    if (time <= 0) {
      clearInterval(this.interval);
      document.removeEventListener("keydown", this.props.handleOnPress);
      this.props.displayEndGame();
    } else this.setState({ time: (time - 1).toFixed(0) });
    // console.log("t");
  }

  render() {
    let { time } = this.state;

    let { accuracy } = this.props;
    return (
      <div>
        <span>Time: {time}</span>
        <br />
        <span>Accuracy:{`${accuracy} %`}</span>
        <br />
        <br />
      </div>
    );
  }
}

// const ScoreCard = props => {
//   const [time, setTime] = useState(3);
//   let interval;
//   useEffect(() => {
//     interval = setInterval(countDown, 1000);
//     return () => clearInterval(interval);
//   });

//   function countDown() {
//     if (time <= 0) {
//       // clearInterval(interval);
//       document.removeEventListener("keydown", props.handleOnPress);
//       props.displayEndGame();
//     } else setTime(time - 1);
//     // console.log("t");
//   }

//   return (
//     <div>
//       <span>Time: {time}</span>
//       <br />
//       <span>Accuracy:{`${props.accuracy} %`}</span>
//       <br />
//       <br />
//     </div>
//   );
// };

export default ScoreCard;
