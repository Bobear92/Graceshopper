const express = require("express");
const inventoryRouter = express.Router();
const {
  getInventory,
  getInventoryById,
  updateInventoryCount,
  createInventory,
} = require("../db/inventory");

inventoryRouter.get("/", async (req, res, next) => {
  try {
    const inventory = await getInventory();
    if (inventory) {
      res.send(inventory);
    } else {
      res.send({ message: "No Inventory found" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

inventoryRouter.post("/", async (req, res, next) => {
  const { name, description, price, count } = req.body;
  if (!name || !description || !price || !count) {
    next({
      name: "MissingCredentialsError",
      message: "Please fill out all fields",
    });
  }
  try {
    const product = await createInventory({ name, description, price, count });
    if (product) {
      res.send(product);
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "One of your fields is fucked up man!",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

inventoryRouter.post("/product", async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply an id",
    });
  }
  try {
    // get to here
    const product = await getInventoryById(id);
    if (product) {
      res.send(product);
    } else {
      next({
        name: "IncorrectCredentialsError",
        message: "Id is incorrect",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

inventoryRouter.patch("/", async (req, res, next) => {
  const { id, count } = req.body;
  try {
    const updateCount = await updateInventoryCount({
      id,
      count,
    });
    res.send(updateCount);
  } catch (error) {
    next({ name: "MissingFieldsError", message: "Missing Information" });
  }
});

module.exports = inventoryRouter;
