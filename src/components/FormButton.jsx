import React from "react";
import classes from "../styles/main.module.scss";

const FormButton = ({ children, ...props }) => {
  return (
    <button
      // style={{ cursor: "not-allowed" }}
      disabled={true}
      className={classes.input__btn}
      onClick={() => console.log("Click")}
    >
      {children}
    </button>
  );
};

export default FormButton;
