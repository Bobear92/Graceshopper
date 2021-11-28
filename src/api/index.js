import axios from "axios";

const BASE = "http://localhost:5000/api";

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

export async function storeCart(cart, currentPriceArray) {
  try {
    const { data } = await axios.post(`${BASE}/cart`, {
      cart,
      currentPriceArray,
    });
    return data;
  } catch (error) {
    throw error;
  }
}
