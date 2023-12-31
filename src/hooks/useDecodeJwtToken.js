import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useDecodeJwtToken() {
  const [decodedJwt, setDecodedJwt] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    try {
      const decodedJwt = jwtDecode(token);
      setDecodedJwt(decodedJwt);
    } catch (error) {
      navigate("/auth");
    }
  }, []);

  return {
    decodedJwt,
  };
}
export default useDecodeJwtToken;