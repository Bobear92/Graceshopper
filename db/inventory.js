const { client } = require("./index");

async function createInventory({ name, description, price, count }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `INSERT INTO products(name, description, price, count)
        VALUES($1, $2, $3, $4)
        ON CONFLICT (name) DO NOTHING 
        RETURNING *
        `,
      [name, description, price, count]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

async function getInventory() {
  try {
    const { rows } = await client.query(
      `
    SELECT * FROM products;
    `
    );

    return rows;
  } catch (error) {
    throw error;
  }
}

async function getInventoryById(id) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
      SELECT * FROM products
      WHERE id=${id}
      `
    );
    return product;
  } catch (error) {
    throw error;
  }
}

async function updateInventoryCount({ id, count }) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
    UPDATE products
    SET count=$1
    WHERE id=$2
    RETURNING *;`,
      [count, id]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

async function deleteProduct(id) {
  try {
    const {
      rows: [product],
    } = await client.query(
      `
    DELETE FROM products
    where id = $1
    RETURNING *;
    `,
      [id]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createInventory,
  getInventory,
  updateInventoryCount,
  getInventoryById,
  deleteProduct,
};
