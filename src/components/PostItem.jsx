import React from "react";
import classes from "../styles/main.module.scss";

const PostItem = (props) => {
  return (
    <div className={classes.post__flex}>
      <div className={classes.post__content}></div>
    </div>
  );
};

export default PostItem;
