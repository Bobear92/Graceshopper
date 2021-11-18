import axios from "axios";

const BASE = "http://localhost:5000/api";

// export async function getUser() {
//   try {
//     const { data } = await axios.get("/routes/users");
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

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
