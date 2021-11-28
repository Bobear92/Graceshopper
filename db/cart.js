const { getUser } = require("../src/auth"); // Problem with this import everything breaks after i do, but i need here can't import getUserByUsername into front end.
const { client } = require("./index");
const { getUserByUsername } = require("./users");

// this one lets us store info with some dummy data
async function dealWithCart(userId, cart, completed, currentPriceArray) {
  try {
    const {
      rows: [order],
    } = await client.query(
      `
        INSERT INTO orders("userId", "productArray", completed, "historicalPrice")
        Values($1, $2, $3, $4)
                `,
      [userId, cart, completed, currentPriceArray]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

// this one stores the info into order from the front end
async function storeCart(cart, currentPriceArray) {
  const username = getUser();
  const user = getUserByUsername(username);
  try {
    const {
      rows: [order],
    } = await client.query(
      `
        INSERT INTO orders("userId", "productArray", completed, "historicalPrice")
        Values($1, $2)
                `,
      [user.id, cart, true, currentPriceArray]
    );
    return order;
  } catch (error) {
    throw error;
  }
}

module.exports = { dealWithCart, storeCart };
