import React from "react";
import { useAuth } from "./context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

function NavBar() {
  const { currentUser, googleLogin, logout } = useAuth();
  const router = useRouter();
  const loginHandler = async () => {
    if (currentUser) return;
    const response = await googleLogin();
    if (response === "success" && currentUser) {
      router.push("/");
    }
  };
  return (
    <div className="bg-blue-50 h-20 grid grid-cols-2">
      <Link href="/">
        <div className="p-2 pl-8 flex items-center cursor-pointer">
          <img src="/logo.png" className="w-24" />
        </div>
      </Link>
      <div className="flex justify-end items-center pr-20">
        {currentUser ? (
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center h-12 w-24 border-2 rounded-lg cursor-pointer mr-3"
              onClick={() => logout()}
            >
              Logout
            </div>
            <Link href="/users/profile">
              <div className="flex justify-center items-center h-12 w-24 border-2 rounded-lg cursor-pointer">
                Profile{" "}
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div
              className="flex justify-center items-center h-12 w-24 border-2 rounded-lg cursor-pointer mr-3"
              onClick={loginHandler}
            >
              Login
            </div>
            <Link href="/users/register">
              <div className="flex justify-center items-center h-12 w-24 border-2 rounded-lg cursor-pointer">
                Register
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
