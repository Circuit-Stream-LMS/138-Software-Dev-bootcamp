import {useState} from "react";
import Button from './Button.jsx';


const Event = () => {
  
  // useState hook to keep track of count variable
  const [count, setCount] = useState(0);
  // derived state variable from count
  const isDisabled = count >= 10;

  // Event handler function to update state
  const handleButtonClick = () => {
    // updating count variable using setCount
    // syntax : setFunc((previousvalueofstatevariable)=> previousvalueofstatevariable+ 1)
    setCount((prev)=> prev + 1);
  };

  return (
    <div className="container">
      <h2 className="title">React Event Handling Example</h2>

      {/* Passing event handler as a prop to child component */}
      <Button
        onClickHandler={handleButtonClick}
        label="Click Me again"
        disabled={isDisabled}
      />

      {/* Displaying the updated count */}
      <p className="count-text">Button clicked {count} times</p>
      {isDisabled && (
        <p className="warning-text">Button disabled after 10 clicks!</p>
      )}
    </div>
  );
};
export default Event;
