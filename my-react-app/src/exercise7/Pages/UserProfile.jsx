import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();

  return <h2>User Profile for User ID: {userId}</h2>;
}

export default UserProfile;
