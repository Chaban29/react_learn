import React from "react";
import classes from "./styles/main.module.scss";
import Post from "./components/Post";
import Form from "./components/Form";

const App = () => {
  return (
    <div className={classes.App}>
      <Post />
      <Form one='Назва посту' two='Опис посту' btnName='Submit' />
    </div>
  );
};

export default App;
