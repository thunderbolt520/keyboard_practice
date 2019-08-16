import React from "react";
import Axios from "axios";

class PostScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: [] };
  }
  componentDidMount() {
    Axios.get("/scoreCard")
      .then(result => {
        console.log("score card: ", result.data);
        this.setState({ score: result.data });
      })
      .catch(() => console.log("fail to get score card"));
  }

  render() {
    return <form>{""}</form>;
  }
}

export default PostScore;
