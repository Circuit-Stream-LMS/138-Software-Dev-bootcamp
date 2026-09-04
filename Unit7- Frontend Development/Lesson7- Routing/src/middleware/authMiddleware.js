import { redirect } from "react-router";

// Runs before the route's loader/element. Throwing redirect() halts navigation.
export const authMiddleware = async () => {
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  if (!isAuthenticated) {
    throw redirect("/");
  }
};