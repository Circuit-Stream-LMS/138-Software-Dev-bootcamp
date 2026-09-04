import { useLocation } from "react-router";

const About = () => {
  const location = useLocation();
  return (
    <div>
      <h1>About Page</h1>
      <p>Current path: {location.pathname}</p>
    </div>
  );
};

export default About;
