import React, { useState } from "react";
import Axios from "axios";
import keyClickSound from "../keypressSound.mp3";
import ScoreCard from "./scoreCard";
import GameEndBoard from "./gameEndBoard";

class DisplayText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "",
      game: 1,
      color: "#FDFFF5",
      index: 0,
      score: [],
      accuracy: 0,
      letter: `qwertyuiopasdfghjklzxcvbnm1234567890,.?!@#$%^&*:;'"=+-_ QWERTYUIOPASDFGHJKLZXCVBNM`,
      gameEnd: false,
      total: 0
    };
    this.audio = new Audio(keyClickSound);
    this.handleOnPress = this.handleOnPress.bind(this);
    this.playSound = this.playSound.bind(this);
    this.calculateAccuracy = this.calculateAccuracy.bind(this);
    this.displayEndGame = this.displayEndGame.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleOnPress);
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
    let { index, letter, words, score, accuracy } = this.state;
    let key = e.key;
    let newScore = score;

    if (key === "Backspace") {
      this.playSound();
      if (index > 0) {
        let tempNum = newScore.splice(-1, 1);
        this.calculateAccuracy(tempNum);
        document.getElementById(`span${index - 1}`).style.backgroundColor =
          "#FDFFF5";
        this.setState({ index: index - 1, score: newScore });
      }
    } else if (letter.indexOf(key) !== -1) {
      this.playSound();
      if (key === words[index]) {
        document.getElementById(`span${index}`).style.backgroundColor =
          "#90EE90";
        this.calculateAccuracy(1);
        this.setState({ index: index + 1, score: [...score, 1] });
      } else {
        this.calculateAccuracy(0);
        document.getElementById(`span${index}`).style.backgroundColor =
          "#FFCCCB";
        this.setState({ index: index + 1, score: [...score, 0] });
      }
    }
  }

  calculateAccuracy(num) {
    let { score } = this.state;
    let right = 0;
    let ave = 0;

    if (num === 1) right += 1;
    for (let i = 0; i < score.length; i++) {
      if (score[i] === 1) right += 1;
    }
    ave = ((right / (score.length + 1)) * 100).toFixed(0);
    this.setState({ accuracy: ave, total: right });
  }
  playSound() {
    // this.audio.pause();
    this.audio.play();
  }
  displayEndGame() {
    this.setState({ gameEnd: true });
  }
  render() {
    let words = this.state.words.split("");
    let { color, accuracy, gameEnd, total } = this.state;
    let { player } = this.props;
    return (
      <div>
        <ScoreCard
          accuracy={accuracy}
          handleOnPress={this.handleOnPress}
          displayEndGame={this.displayEndGame}
        />
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {gameEnd ? <GameEndBoard player={player} total={total} /> : ""}
      </div>
    );
  }
}

export default DisplayText;
