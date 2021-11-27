// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./index");

const { createUser } = require("./users");
const { createInventory } = require("./inventory");
const { dealWithCart } = require("./cart");

async function buildTables() {
  try {
    client.connect();

    async function dropTables() {
      console.log("Dropping All Tables...");
      // drop all tables, in the correct order
      try {
        await client.query(`
      DROP TABLE IF EXISTS orders;
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS users;
      `);

        console.log("Finished dropping tables");
      } catch (error) {
        console.error(error);
        console.error("Error dropping tables");
      }
    }

    // build tables in correct order

    async function createTables() {
      console.log("Starting to build tables...");
      // create all tables, in the correct order

      try {
        await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username varchar(255) UNIQUE NOT NULL,
        password varchar(255) NOT NULL,
        admin BOOLEAN DEFAULT 'false'
      );
    `);

        await client.query(`
        CREATE TABLE products (
          id SERIAL PRIMARY KEY, 
          name VARCHAR(255) UNIQUE NOT NULL,
          description TEXT NOT NULL,
          price INTEGER,
          count INTEGER
        );
    `);

        await client.query(`
              CREATE TABLE orders (
              id SERIAL PRIMARY KEY,
              "userId" INTEGER REFERENCES users(id),
              "productArray" INTEGER ARRAY, 
              completed BOOLEAN DEFAULT 'false',
              "historicalPrice" INTEGER ARRAY
            );`);

        console.log("Finished building tables");
      } catch (error) {
        console.error("Error building tables");
      }
    }

    await dropTables();
    await createTables();
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    async function createInitialUsers() {
      console.log("Starting to create users...");
      try {
        const usersToCreate = [
          { username: "cochlea", password: "eardrum", admin: true },
          { username: "spock", password: "finalFrontEar", admin: false },
        ];

        const users = await Promise.all(usersToCreate.map(createUser));

        console.log("Users created:");
        console.log(users);
        console.log("Finished creating users!");
      } catch (error) {
        console.error("Error creating users!");
        throw error;
      }
    }

    async function createInitialInventory() {
      console.log("Starting to create Inventory");
      try {
        const inventoryToCreate = [
          {
            name: "Big Old Plugs!",
            description: "For someone with big old ear holes!",
            price: 1999,
          },
          {
            name: "Tiny boy ear plugs",
            description: "For someone with puny little ear holes",
            price: 1795,
            count: 200,
          },
        ];
        const inventory = await Promise.all(
          inventoryToCreate.map(createInventory)
        );

        console.log("Inventory Created:");
        console.log(inventory);
        console.log("Finished creating inventory!");
      } catch (error) {
        console.error("Error creating Inventory");
        throw error;
      }
    }

    async function createInitialOrder() {
      console.log("Starting to create order");
      try {
        const orderToCreate = {
          userId: 2,
          cart: [1, 2],
          completed: true,
          historicalPrice: [1999, 1795],
        };

        const order = await dealWithCart(
          orderToCreate.userId,
          orderToCreate.cart,
          orderToCreate.completed,
          orderToCreate.historicalPrice
        );
        console.log("order created");
        console.log(order);
        console.log("Finished Creating Order!");
      } catch (error) {
        console.error("Error creating order");
        throw error;
      }
    }

    await createInitialUsers();
    await createInitialInventory();
    await createInitialOrder();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
