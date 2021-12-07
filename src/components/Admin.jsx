import React, { useEffect, useState, Fragment } from "react";
import "./Admin.css";
import { getUsers } from "../api";
import { SingleUserCard, SingleProductAdminCard, AddProduct } from ".";

const Admin = ({ allInventory }) => {
  const [users, setUsers] = useState([]);

  const handleUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };
  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <div className="admin-main-component">
      <h1>Admin</h1>
      <div className="admin-users">
        <p>All sites users</p>
        {users && users.length
          ? users.map((user) => {
              return (
                <SingleUserCard
                  key={`users in admin map:${user.id}`}
                  user={user}
                  users={users}
                  setUsers={setUsers}
                />
              );
            })
          : null}
      </div>
      <div>
        <p>Add a new product to the inventory</p>
        <AddProduct />
      </div>
      <div className="admin-inventory">
        <p>All the inventory currently on the site</p>
        {allInventory.map((product) => {
          return (
            <Fragment key={`products in  admin inventory: ${product.id}`}>
              <SingleProductAdminCard product={product} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
