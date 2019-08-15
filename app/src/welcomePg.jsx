import React from "react";
import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   input: {
//     display: "none"
//   }
// }));

// const classes = useStyles();
//className={classes.button}

class WelcomePg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   this.props.handleClick(true);
  // }
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
