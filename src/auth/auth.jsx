import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/context";
import { HashLoader } from "react-spinners";

// Protect pages like /chat
export function ProtectedRoute() {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center bg-bacground">
        <HashLoader color="#0CAFFF" size={24} />
        {/* <PacmanLoader color="#0CAFFF" /> */}
      </div>
    );
  if (!user) return <Navigate to="/signin" />;

  return <Outlet />; // render children routes
}

// Prevent logged-in users from accessing /signin or /signup
export function PublicRoute() {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="h-full flex justify-center items-center">
        <HashLoader color="#0CAFFF" size={24} />
        {/* <PacmanLoader color="#0CAFFF" /> */}
      </div>
    );
  if (user) return <Navigate to="/chat" />;

  return <Outlet />;
}
