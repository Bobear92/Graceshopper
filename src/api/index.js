import axios from "axios";

const BASE = "http://localhost:5000/api"; // When in development have this one running
// const BASE = "/api"; // when deploying to heroku have this one running

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password, admin) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username,
      password,
      admin,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInventory() {
  try {
    const { data } = await axios.get(`${BASE}/inventory`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createProduct({ name, description, price, count }) {
  price *= 100;
  try {
    const { data } = await axios.post(`${BASE}/inventory`, {
      name,
      description,
      price,
      count,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInventoryById(id) {
  try {
    const { data } = await axios.post(`${BASE}/inventory/product`, {
      id,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateProductCount(id, count) {
  try {
    const { data } = await axios.patch(`${BASE}/inventory`, {
      id,
      count,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function storeCart(userId, cart, completed, currentPriceArray) {
  try {
    const { data } = await axios.post(`${BASE}/cart`, {
      userId,
      cart,
      completed,
      currentPriceArray,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function history(userId) {
  try {
    const { data } = await axios.post(`${BASE}/cart/history`, {
      userId,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUserByUsername(username) {
  try {
    const { data } = await axios.post(`${BASE}/users`, {
      username,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const { data } = await axios.delete(`${BASE}/inventory/${id}`, {});
    return data;
  } catch (error) {
    throw error;
  }
}
