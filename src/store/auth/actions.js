import { API_URL } from "../../config";
import axios from "axios";

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    try {
      const loginData = await axios.post(`${API_URL}/login`, {
        email: "kelley@codaisseur.com",
        password: "abcd",
      });
      console.log(loginData);
      const token = loginData.data.jwt;
      console.log(token);
      const profile = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(profile);
    } catch (e) {
      console.error(e);
    }
  };
}
