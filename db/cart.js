const client = require("./");

async function dealWithCart(cart) {
  const deepCopyCart = [...cart];
  const dollarPlaceHolder = cart.map((_, index) => `$${index + 1}`).join(", ");
  const cartData = cart.map((item) => item.id);
  if (!cartData.length) return;

  try {
    const {rows: orders} = await client.query(
      `
        INSERT products.*, orders.completed, orders.historicalPrice
        INTO orders
        JOIN orders ON orders.id = users.id
        WHERE orders."productId" IN (${dollarPlaceHolder})
                `,
      cartData
    );
  } catch (error) {
    throw error;
  }
}

// want to update count in inventory
// want to add the product to the user history so we can see everything they have bought.
// in history keep track of hpw much the product was

const { rows: activities } = await client.query(
  `
    SELECT activities.*, routine_activities.duration, routine_activities.count, routine_activities.id AS "routineActivityId", routine_activities."routineId"
    FROM activities
    JOIN routine_activities ON routine_activities."activityId" = activities.id
    WHERE routine_activities."routineId" IN (${binds});
  `,
  routineIds
);
// loop over the routines
for (const routine of routinesToReturn) {
  // filter the activities to only include those that have this routineId
  const activitiesToAdd = activities.filter(
    (activity) => activity.routineId === routine.id
  );
  // attach the activities to each single routine
  routine.activities = activitiesToAdd;
}
return routinesToReturn;

UPDATE table SET number_of_people = number_of_people - 3 WHERE id = 487364 
