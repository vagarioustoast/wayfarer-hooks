import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "../components/Profile/Profile";

const ProfileContainer = ({ match }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const userId = match.params.userId;
        const response = await axios.get(
          `${process.env.REACT_API_API}/users/${userId}`
        );
        console.log(response);
        setUser(response.data.user);
        setUserPosts(response.data.userPosts);
      } catch (err) {
        console.error(err);
        setError(err.response.data.error);
      }
    };
    getProfile();
  }, [match.params.userId]);
  return (
    <div>
      <Profile user={user} userPosts={userPosts} />
    </div>
  );
};

export default ProfileContainer;
