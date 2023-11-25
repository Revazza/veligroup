import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Auth() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    const loc = window.location.href;
    console.log(loc);
    if (loc.includes("register")) {
      return;
    }
    if (!token) {
      navigate("/auth/login");
      return;
    }

    navigate("/");
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Auth;
