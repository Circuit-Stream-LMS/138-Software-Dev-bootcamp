import { useParams, useNavigate, useLoaderData } from "react-router";

const Profile = () => {
  const { username } = useParams();      // raw URL param, e.g. "john"
  const navigate = useNavigate();        // for user-triggered actions
  const user = useLoaderData();          // resolved data from profileLoader

  return (
    <div>
      <h1>Profile: {username}</h1>
      <p>{user.name}</p>
      <p>{user.bio}</p>
      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default Profile;