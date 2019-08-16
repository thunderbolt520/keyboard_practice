import React from "react";
import ReactDOM from "react-dom";
import WelcomePg from "./src/welcomePg";

const App = () => {
  return (
    <div>
      <WelcomePg />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
