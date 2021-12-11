import React, { useEffect, useState, Fragment } from "react";
import "./Admin.css";
import { getUsers } from "../api";
import { SingleUserCard, SingleProductAdminCard, AddProduct } from ".";

const Admin = ({ allInventory }) => {
  const [users, setUsers] = useState([]);
  const [userToggle, setUserToggle] = useState(false);
  const [createToggle, setCreateToggle] = useState(false);
  const [InventoryToggle, setInventoryToggle] = useState(false);

  const handleUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };
  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <div className="outer-container">
      <div className="admin-main-component">
        <div>
          <div className="admin-outer">
            <div className="admin-title">
              <h1>Administration</h1>
            </div>
          </div>
          <div className="admin-butts">
            <button
              className="admin-butt"
              onClick={() => {
                setInventoryToggle(false);
                setCreateToggle(false);
                setUserToggle(true);
              }}
            >
              Users
            </button>
            <button
              className="admin-butt"
              onClick={() => {
                setInventoryToggle(false);
                setCreateToggle(true);
                setUserToggle(false);
              }}
            >
              Add Inventory
            </button>
            <button
              className="admin-butt"
              onClick={() => {
                setInventoryToggle(true);
                setCreateToggle(false);
                setUserToggle(false);
              }}
            >
              Current Inventory
            </button>
          </div>
        </div>
        <div className="border"></div>
        {userToggle ? (
          <div className="admin-users">
            <div className="outer-container">
              <div className="user-title">
                <p>All site's users</p>
              </div>
            </div>
            <div className="user-cards">
              {users && users.length
                ? users.map((user) => {
                    return (
                      <div className="user-indi-card">
                        <SingleUserCard
                          key={`users in admin map:${user.id}`}
                          user={user}
                          users={users}
                          setUsers={setUsers}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        ) : createToggle ? (
          <div className="admin-create">
            <div className="admin-outer">
              <div className="admin-create-title">
                <p>Add a new product to the inventory</p>
              </div>
            </div>
            <AddProduct />
          </div>
        ) : InventoryToggle ? (
          <div className="admin-inventory">
            <div className="admin-outer">
              <div className="admin-invi-title">
                <p>All the inventory currently on the site</p>
              </div>
            </div>
            <div className="invi-cards">
              {allInventory.map((product) => {
                return (
                  <div className="invi-card">
                    <Fragment
                      key={`products in  admin inventory: ${product.id}`}
                    >
                      <SingleProductAdminCard product={product} />
                    </Fragment>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
