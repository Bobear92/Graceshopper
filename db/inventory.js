const { client } = require("./index");

async function createInventory({ name, description, price, count }) {
  try {
    const {
      rows: [inventory],
    } = await client.query(
      `INSERT INTO inventory(name, description, price, count)
        VALUES($1, $2, $3, $4)
        ON CONFLICT (name) DO NOTHING 
        RETURNING *
        `,
      [name, description, price, count]
    );
    return inventory;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createInventory,
};
