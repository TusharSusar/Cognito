import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/context";

// Protect pages like /chat
export function ProtectedRoute() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/signin" />;

  return <Outlet />; // render children routes
}

// Prevent logged-in users from accessing /signin or /signup
export function PublicRoute() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/chat" />;

  return <Outlet />;
}
