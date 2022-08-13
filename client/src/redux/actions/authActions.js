// // import { url, setHeaders } from "./api";
// import axios from "axios";


//   export const registerUser = async (payload, { rejectWithValue }) => () => {
//         try {
//           const token = await axios.post('http://localhost:3001/users', payload);
//           localStorage.setItem("token", token.data);
//           return token.data;
//         } catch (error) {
//           console.log(error.response.data);
//           return rejectWithValue(error.response.data);
//         }
//   };