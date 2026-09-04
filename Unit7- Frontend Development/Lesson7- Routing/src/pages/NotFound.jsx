import { useRouteError } from "react-router";

const NotFound = () => {
  // useRouteError() gives you the thrown Response/Error when used as errorElement
  const error = useRouteError();

  return (
    <div>
      <h1>404 — Not Found</h1>
      <p>{error?.statusText || "The page you're looking for doesn't exist."}</p>
    </div>
  );
};

export default NotFound;