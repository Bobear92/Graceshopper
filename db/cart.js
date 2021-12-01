const { client } = require("./index");

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

async function getHistoryByUser(userId) {
  try {
    const { rows } = await client.query(
      `
      SELECT * FROM orders
      WHERE "userId" = $1 AND completed = 'true'
      `,
      [userId]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { dealWithCart, getHistoryByUser };
