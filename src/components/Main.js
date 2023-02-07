import "../css/Main.css";
import Head from "./Head";
import Input from "./Input";
import Keys from "./Keys";
import { useState } from "react";

function Main() {
  // state for displaying the number in input field
  const [initialInput, setInput] = useState(" ");

  const [initialCalc, setCalc] = useState(0);

  // click handler for number that clicked on the keypad

  const ClickHandler = (e) => {
    let numClicked = e.target.innerHTML;
    setInput(initialInput + numClicked);
  };

  const AddHandler = (e) => {
    let operator = e.target.innerHTML;
    if (operator === "+") {
      setCalc(initialCalc + parseInt(initialInput));
      setInput(" ");
    }
  };

  const EqualHandler = () => {
    setInput(initialCalc + parseInt(initialInput));
    setCalc(parseInt(initialInput));
  };

  // reset handler for resetting the input feild
  const ResetHandler = () => {
    setInput(" ");
    setCalc(0);
  };

  return (
    <div className="Main">
      {/* Renders every other components */}
      <Head />
      <Input initialInput={initialInput} />
      <Keys
        AddHandler={AddHandler}
        EqualHandler={EqualHandler}
        ResetHandler={ResetHandler}
        ClickHandler={ClickHandler}
      />
    </div>
  );
}

export default Main;
