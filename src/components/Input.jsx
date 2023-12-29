import React, { useState } from "react";
import classes from "../styles/main.module.scss";
import styled from "styled-components";

const InputTop = styled.input`
  margin-top: 30px;
  border: none;
  cursor: pointer;
`;

const Input = () => {
  const [value, setValue] = useState("");
  return (
    <div className={classes.input_item}>
      <InputTop
        type="text"
        className={classes.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <h2 className={classes.headingTwo}>{value}</h2>
    </div>
  );
};

export default Input;
