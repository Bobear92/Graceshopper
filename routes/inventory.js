const express = require("express");
const inventoryRouter = express.Router();
const {
  getInventory,
  getInventoryById,
  updateInventoryCount,
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

inventoryRouter.post("/product", async (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    next({
      name: "MissingCredentialsError",
      message: "Please supply an id",
    });
  }
  try {
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

inventoryRouter.patch("/:productId", async (req, res, next) => {
  console.log("Can is see this?");
  const { productId } = req.params;
  const { count } = req.body;
  // console.log(productId, count, "id and count in routes");  can't see this.
  try {
    const updateCount = await updateInventoryCount({
      id: productId,
      count,
    });
    res.send(updateCount);
  } catch (error) {
    next({ name: "MissingFieldsError", message: "Missing Information" });
  }
});

module.exports = inventoryRouter;
