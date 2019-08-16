import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function Start(props) {
  const [name, setName] = useState("");
  const [fail, setFail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // console.log("player: ", player);
    handleClick();
  };

  const handleClick = () => {
    if (name.length > 0) {
      props.setPlayer(name);
      props.clickStart();
    } else {
      setFail("Name is require!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Input Your Name: </span>
      <br />
      <br />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={handleClick}>
        START GAME
      </Button>
      <br />
      <br />
      <label>{fail}</label>
    </form>
  );
}

export default Start;
