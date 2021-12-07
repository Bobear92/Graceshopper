import React from "react";
import "./SingleUserCard.css";
import { deleteUser, kingMe } from "../api";

const SingleUserCard = ({ user, users, setUsers }) => {
  function handleFilter() {
    const filterUsers = users.filter((singleUser) => {
      if (singleUser.id !== user.id) {
        return true;
      } else {
        return false;
      }
    });
    return filterUsers;
  }
  return (
    <div className="single-user-card-main-component">
      <div>
        <p>User:{user.username}</p>
        <p>Admin Status:{user.admin.toString()}</p>
      </div>
      <div className="single-user-card-buttons">
        <button
          onClick={async () => {
            try {
              const kingUser = await kingMe(user.id);
              const filterUsers = handleFilter();
              const copied = [kingUser, ...filterUsers];
              setUsers(copied);
            } catch (error) {
              throw error;
            }
          }}
        >
          Promote to admin.
        </button>
        <button
          onClick={async () => {
            try {
              await deleteUser(user.id);
              const filterUsers = handleFilter();
              setUsers(filterUsers);
            } catch (error) {
              throw error;
            }
          }}
        >
          Delete user
        </button>
      </div>
    </div>
  );
};

export default SingleUserCard;
