import Menu from "./components/Menu";

// Functional component that serves as the parent component of the app
const App = () => {
  return (
    <div className="app">
      <Menu />
    </div>
  );
};

// Exporting the App component
export default App;