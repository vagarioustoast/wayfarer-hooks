import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Posts/Post";

const PostContainer = ({ match }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const result = await axios.get(
        `${process.env.REACT_APP_API}/posts/${match.params.postId}`,
        { withCredentials: true }
      );
      console.log(result);
      setPost(result.data.post);
    };
    getPost();
  }, [match.params.postId]);
  return (
    <div>
      <h1>Post Container</h1>
    </div>
  );
};

export default PostContainer;
