import "../css/Main.css";
import Head from "./Head";
import Input from "./Input";
import Keys from "./Keys";
import { useState } from "react";

function Main({ theme, Settheme }) {
  // state for displaying the number in input field
  const [input, setInput] = useState("");
  const [result, setresult] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  // updates the value in the input feild
  const updateInput = (value) => {
    if (
      (ops.includes(value) && input === "") ||
      (ops.includes(value) && ops.includes(input.slice(-1)))
    ) {
      return;
    }
    setInput(input + value);

    if (!ops.includes(value)) {
      setresult(eval(input + value));
    }
  };

  // updates the value in the input field when = is clicked
  const equalHandler = () => {
    setInput(result.toString());
  };

  // resets everything in the input field
  const ResetHandler = () => {
    setInput("");
  };

  // deletes the last element in the input field
  const deleteHandler = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="Main">
      {/* Renders every other components */}
      <Head theme={theme} Settheme={Settheme} />
      <Input theme={theme} initialInput={input} />
      <Keys
        DeleteHandler={deleteHandler}
        ResetHandler={ResetHandler}
        updateInput={updateInput}
        equalHandler={equalHandler}
        theme={theme}
        Settheme={Settheme}
      />
    </div>
  );
}

export default Main;
