import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article>
      <h4>
        <Link to={`/posts/${post._id}`}>{post.title}</Link>
      </h4>
    </article>
  );
};

export default Post;
