const express = require("express");
const cartRouter = express.Router();
const { storeCart } = require("../db/cart");

cartRouter.post("/", async (req, res, next) => {
  const { user, cart, currentPriceArray } = req.body;
  try {
    if ((user, cart, currentPriceArray)) {
      const addCart = await storeCart({
        user,
        cart,
        currentPriceArray,
      });
      res.send(addCart);
    } else {
      res.send({ message: "Missing fields" });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = cartRouter;
