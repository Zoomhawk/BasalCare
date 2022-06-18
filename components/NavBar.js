import React from "react";
import { useAuth } from "./context/AuthContext";
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
    <div className="bg-blue-50 h-16 grid grid-cols-2">
      <div className="p-2 pl-8">
        <img src="/logo.png" className="h-12 w-24" />
      </div>
      <div className="flex justify-end items-center pr-20">
        <div className="h-12 w-24 border-2 flex justify-center items-center rounded-lg cursor-pointer">
          {currentUser ? (
            <div onClick={() => logout()}>logout</div>
          ) : (
            <div onClick={loginHandler}>Login</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
