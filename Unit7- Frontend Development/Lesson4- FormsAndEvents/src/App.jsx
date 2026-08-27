import { useState } from "react";
import Event from "./components/Event.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import RegistrationFormUncontrolled from "./components/RegistrationFormUncontrolled.jsx";
import './App.css';

const App = () => {

  const [toggleForm, setToggleForm] = useState(false);

  const handleClick = () => {
    setToggleForm(!toggleForm);
  }
  return (
      <>
      {/* <Event /> */}
      <button onClick={handleClick}>Toggle Form</button>

      {/* conditionally rendering a react component */}
      {toggleForm ? <RegistrationForm/> : <RegistrationFormUncontrolled/>}
      </>
  );
};

export default App;
