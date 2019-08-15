import React from "react";
import Button from "@material-ui/core/Button";

class WelcomePg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={this.props.handleClick}
      >
        START GAME
      </Button>
    );
  }
}

export default WelcomePg;
