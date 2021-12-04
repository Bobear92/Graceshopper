import React from "react";
import "./SingleUserCard.css";

const SingleUserCard = ({ user }) => {
  return (
    <div className="single-user-card-main-component">
      <div>
        <p>User:{user.username}</p>
        <p>Admin Status:{user.admin.toString()}</p>
      </div>
      <div className="single-user-card-buttons">
        <button>Promote to admin.</button>
        <button>Delete user</button>
      </div>
    </div>
  );
};

export default SingleUserCard;
