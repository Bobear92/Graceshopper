const { client } = require("./index");

async function dealWithCart(userId, cart, completed, currentPriceArray) {
  console.log(userId, "user id");
  console.log(cart, "cart");
  console.log(completed, "completed");

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

module.exports = { dealWithCart };
