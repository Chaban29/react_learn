import { useState } from "react";
import classes from "../styles/main.module.scss";
import FormButton from "./FormButton";

const Form = ({ ...props }) => {
  const [text, setText] = useState("Post Name: ");
  const [textSecondary, setTextSecondary] = useState("Post Name: ");
  return (
    <div className={classes.form}>
      <form action="#" className={classes.form__container}>
        <input
          type="text"
          className={classes.input__post}
          placeholder={text}
          onChange={(event) => setText(event.target.value)}
        />
        <input
          type="text"
          placeholder={textSecondary}
          className={classes.input__post}
          onChange={(event) => setTextSecondary(event.target.value)}
        />
        <FormButton>Create Post</FormButton>
      </form>
    </div>
  );
};

export default Form;
