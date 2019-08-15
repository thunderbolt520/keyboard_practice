import React from "react";
import ReactDOM from "react-dom";
import WelcomePg from "./src/welcomePg";
import Container from "@material-ui/core/Container";
import DisplayText from "./src/displayText";
import Drawer from "@material-ui/core/Drawer";
import image1 from "./images//BrHs3D3.jpg";

let styles = {
  // margin: "20px",
  // width: "250px",
  height: "250px",
  backgroundColor: "rgba(253, 255, 245, 0.8)"
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      start: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ start: true });
  }
  render() {
    let { start } = this.state;
    return (
      <div>
        {/* <img src={image1} /> */}
        {/* <h3>testing</h3> */}
        <ul style={styles}>
          {start ? (
            <DisplayText />
          ) : (
            <WelcomePg handleClick={this.handleClick} />
          )}
        </ul>
      </div>
    );
  }
}
// style={{ backgroundImage: `url(../app/images/BrHs3D3.jpg)` }}
ReactDOM.render(<App />, document.getElementById("app"));
