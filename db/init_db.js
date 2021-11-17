// code to build and initialize DB goes here
const {
  client,
  // other db methods
} = require("./index");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    async function dropTables() {
      console.log("Dropping All Tables...");
      // drop all tables, in the correct order
      try {
        await client.query(`
          DROP TABLE IF EXISTS inventory;
          DROP TABLE IF EXISTS users;
          `);

        console.log("Finished dropping tables");
      } catch (error) {
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
            CREATE TABLE inventory (
              id SERIAL PRIMARY KEY, 
              name VARCHAR(255) UNIQUE NOT NULL,
              description TEXT NOT NULL,
              price INTEGER,
              count INTEGER
            )
        `);

        console.log("Finished building tables");
      } catch (error) {
        console.error("Error building tables");
      }
    }

    dropTables();
    createTables();
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data

    async function createInitialUsers() {
      console.log("Starting to create users...");
      try {
        const usersToCreate = [
          { username: "cochlea", password: "eardrum" },
          { username: "sandra", password: "sandra123" },
          { username: "glamgal", password: "glamgal123" },
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

    createInitialUsers();
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
