import React from "react";
import ReactDOM from "react-dom";
// import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div>
        <h3>testing</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
