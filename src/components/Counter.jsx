import React, { useState } from "react";
import classes from "../styles/main.module.scss";

const Counter = ({ ...props }) => {
  const [like, setLikes] = useState(0);
  
  const Increment = () => {
    setLikes(like + 1);
  };

  const Decrement = () => {
    if (like < 1) {
      return;
    }
    setLikes(like - 1);
  };

  return (
    <div className={classes.counter}>
      <h1>{like}</h1>
      <button onClick={Increment}>{props.increase}</button>
      <button onClick={Decrement}>{props.decrease}</button>
    </div>
  );
};

export default Counter;
