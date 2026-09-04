import { Outlet, useNavigation } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  // navigation.state is "idle" | "loading" | "submitting"
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main>
        {navigation.state === "loading" ? <p>Loading…</p> : <Outlet />}
      </main>
    </>
  );
};

export default App;