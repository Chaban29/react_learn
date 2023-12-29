import classes from "../styles/main.module.scss";
import PostItem from "./PostItem";
import PostList from "./PostList";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <PostItem postList="Post List" />
      <PostList />
    </div>
  );
};

export default Post;
