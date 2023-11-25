import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../Api";

function useAuthRedirerct() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    const currentLoc = window.location.href;

    if (currentLoc.includes("/auth")) {
      return;
    }

    if (!token) {
      navigate(`/auth/login`);
      console.log("HAHA");
      return;
    }

    try {
      const tokenData = jwtDecode(token);
      const expirationDate = new Date(tokenData.exp * 1000);
      const currentDate = new Date();
      if (currentDate > expirationDate) {
        throw new Error("Invalid Token");
      }
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

    } catch (error) {
      Cookies.remove("token");
      navigate("//auth/login");
    }
  }, [navigate]);
}

export default useAuthRedirerct;
