import React from "react";
import { useAuth } from "../components/context/AuthContext";
import { useRouter } from "next/router";

function NavBar() {
  const { currentUser, googleLogin, logout } = useAuth();
  const router = useRouter();
  const loginHandler = async () => {
    if (currentUser) return;
    const response = await googleLogin();
    if (response === "success" && currentUser) {
    }
  };
  return (
    <div>
      <div>BasalCare</div>
      {currentUser ? (
        <div onClick={() => logout()}>logout</div>
      ) : (
        <div onClick={loginHandler}>Login</div>
      )}
    </div>
  );
}

export default NavBar;
