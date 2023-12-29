import React from "react";
import classes from "../styles/main.module.scss";
import { useState } from "react";

const PostList = (props) => {
  const [posts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 3,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 4,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 5,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
  ]);
  const [postsTwo] = useState([
    {
      id: 6,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 7,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 8,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 9,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
    {
      id: 10,
      title: "JavaScript",
      description: "JavaScript is programming language",
      btnText: "Delete Post",
    },
  ]);
  return (
    <>
      {posts.map((post) => (
        <div className={classes.post__flexTwo} key={post.id}>
          <div>
            <strong>
              {post.id}. {post.title}
            </strong>
            <div>{post.description}</div>
          </div>
          <button className={classes.myBtn}>{post.btnText}</button>
        </div>
      ))}
      {postsTwo.map((post) => (
        <div className={classes.post__flexTwo} key={post.id}>
          <div>
            <strong>
              {post.id}. {post.title}
            </strong>
            <div>{post.description}</div>
          </div>
          <button className={classes.myBtn}>{post.btnText}</button>
        </div>
      ))}
    </>
  );
};

export default PostList;
