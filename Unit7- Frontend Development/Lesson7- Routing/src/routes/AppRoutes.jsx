import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import { authMiddleware } from "../middleware/authMiddleware";

// Mock "database"
const mockUsers = {
  john: { username: "john", name: "John Doe", bio: "Frontend developer" },
  jane: { username: "jane", name: "Jane Smith", bio: "Backend engineer" },
};

// Simulates a real API call
const profileLoader = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = mockUsers[params.username];

  if (!user) {
    // Caught by the nearest errorElement below
    throw new Response("User not found", { status: 404 });
  }

  return user;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "profile/:username",
        middleware: [authMiddleware],
        loader: profileLoader,
        element: <Profile />,
        errorElement: <NotFound />, // catches the thrown 404 Response above
      },
      { path: "*", element: <NotFound /> }, // catches unmatched paths
    ],
  },
]);