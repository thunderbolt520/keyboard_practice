import React, { useState } from "react";
import Axios from "axios";
import Container from "@material-ui/core/Container";
import keyClickSound from "../keypressSound.mp3";
import ScoreCard from "./scoreCard";

// function DisplayText() {
//   const [key, setKey] = useState("");
//   // document.addEventListener("keypress", logKey);

//   // function logKey(e) {
//   //   setKey(key + e.key);
//   //   console.log(e.key);
//   // }
let styles = {
  // flexBasis: "50%",
  // boxSizing: "border-box",
  // height: "30%",
  // height: 50,
  backgroundColor: "#fff"
  //fff white
  //90EE90  green
  //FFCCCB  red
  //FDFFF5
};

//   return (
//     <div>
//       <input style={styles}> </input>
//       <p>{key}</p>
//     </div>
//   );
// }

class DisplayText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "",
      game: 1,
      color: "#FDFFF5",
      index: 0,
      score: [],
      letter: `qwertyuiopasdfghjklzxcvbnm1234567890,.?!@#$%^&*:;'"=+-_ QWERTYUIOPASDFGHJKLZXCVBNM`
    };
    this.audio = new Audio(keyClickSound);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleOnPress, false);
    this.fetchWords();
  }
  fetchWords() {
    Axios.get(`/games/:${this.state.game}`)
      .then(result => {
        this.setState({ words: result.data[0].words });
      })
      .catch(err => console.log("fail to fetchWords ", err));
  }
  handleOnPress(e) {
    let { index, letter, words, score } = this.state;
    let key = e.key;
    let newScore = score;
    console.log("socre: ", score);
    if (key === "Backspace") {
      this.playSound();
      newScore.splice(-1, 1);
      document.getElementById(`span${index - 1}`).style.backgroundColor =
        "#FDFFF5";
      if (index !== 0) this.setState({ index: index - 1, score: newScore });
    } else if (letter.indexOf(key) !== -1) {
      this.playSound();
      if (key === words[index]) {
        document.getElementById(`span${index}`).style.backgroundColor =
          "#90EE90";
        this.setState({ index: index + 1, score: [...score, 1] });
      } else {
        document.getElementById(`span${index}`).style.backgroundColor =
          "#FFCCCB";
        this.setState({ index: index + 1, score: [...score, 0] });
      }
    }
  }
  playSound() {
    // this.audio.pause();
    this.audio.play();
  }
  render() {
    let words = this.state.words.split("");
    let { color, score } = this.state;
    return (
      <div>
        <ScoreCard score={score} />
        {words.map((char, i) => {
          return (
            <span
              key={`${i}`}
              id={`span${i}`}
              style={{ backgroundColor: color }}
            >
              {char}
            </span>
          );
        })}
      </div>
    );
  }
}

export default DisplayText;
