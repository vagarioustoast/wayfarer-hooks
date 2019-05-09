import React from "react";
import Post from "../Posts/Post";

const Profile = ({ user, userPosts }) => {
  const signUpDate = `${new Date(user.sign_up_date).toLocaleDateString()}`;
  const posts = userPosts.sort((a, b) =>
    new Date(b.sign_up_date - new Date(a.sign_up_date)).map(post => (
      <Post key={post._id} post={post} />
    ))
  );
  return (
    <>
      <section>
        <h1>Profile</h1>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>City:</strong> {user.city}
        </p>
        <p>${signUpDate}</p>
      </section>
      <section>
        <h2>Posts</h2>
        {posts}
      </section>
    </>
  );
};

export default Profile;
