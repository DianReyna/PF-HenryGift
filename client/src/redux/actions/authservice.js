import axios from "axios";
// const URL = "https://henrygift-api.herokuapp.com";
const URL = "http://localhost:3001";

// Register user
const register = async (userData) => {
  const response = await axios.post(`${URL}/register`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const googleLogin = async (userData) => {
  const response = await axios.post(`${URL}/googleLogin`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${URL}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
  googleLogin,
};

export default authService;
