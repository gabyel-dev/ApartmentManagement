// CheckAuth.ts
import axios from "axios";

const CheckAuth = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false;

    const url = import.meta.env.VITE_URL;
    const res = await axios.get(`${url}/protected`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.status === 200;
  } catch (err) {
    return false;
  }
};

export default CheckAuth;
