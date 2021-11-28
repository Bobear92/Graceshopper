const express = require("express");
const cartRouter = express.Router();
const { storeCart } = require("../db/cart");

cartRouter.post("/", async (req, res, next) => {
  const { cart, currentPriceArray } = req.body;
  try {
    if ((cart, currentPriceArray)) {
      const addCart = await storeCart({
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
