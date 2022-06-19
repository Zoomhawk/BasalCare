// Code snippet from https://www.youtube.com/watch?v=0mC--Pgle-o

import { useRouter } from "next/router";
import { useAuth } from "./AuthContext";

export function protectedRoute(Component) {
  return function ProtectedRoute(props) {
    const { currentUser } = useAuth();
    const route = useRouter();

    if (!currentUser) {
      route.replace("/");
      return (
        <div className="w-full h-full flex justify-center items-center">
          Loading ...
        </div>
      );
    }
    return <Component {...props} />;
  };
}

export function publicRoute(Component) {
  return function PublicRoute(props) {
    const { currentUser } = useAuth();
    const route = useRouter();

    if (currentUser) {
      route.replace("/");
      return (
        <div className="w-full h-full flex justify-center items-center">
          Loading ...
        </div>
      );
    }
    return <Component {...props} />;
  };
}
