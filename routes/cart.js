const express = require("express");
const cartRouter = express.Router();
const { dealWithCart, getHistoryByUser } = require("../db/cart");

cartRouter.post("/", async (req, res, next) => {
  const { userId, cart, completed, currentPriceArray } = req.body;

  try {
    if ((userId, cart, completed, currentPriceArray)) {
      const addCart = await dealWithCart(
        userId,
        cart,
        completed,
        currentPriceArray
      );
      res.send(addCart);
    } else {
      res.send({ message: "Missing fields" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

cartRouter.post("/history", async (req, res, next) => {
  const { userId } = req.body;

  try {
    if (userId) {
      const history = await getHistoryByUser(userId);
      res.send(history);
    } else {
      res.send({ message: "Missing fields" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = cartRouter;
