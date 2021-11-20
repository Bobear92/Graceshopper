const express = require("express");
const inventoryRouter = express.Router();
const { getInventory } = require("../db/inventory");

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

module.exports = inventoryRouter;
