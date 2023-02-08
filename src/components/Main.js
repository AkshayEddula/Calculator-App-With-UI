import "../css/Main.css";
import Head from "./Head";
import Input from "./Input";
import Keys from "./Keys";
import { useState } from "react";

function Main({ theme, Settheme }) {
  // state for displaying the number in input field
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const ClickHandler = (e) => {
    let numClicked = e.target.innerHTML;
    setInput(input + numClicked);
  };

  const AddHandler = (e) => {
    var operator = e.target.innerHTML;
    if (operator === "+") {
      var firstNum = parseInt(input);
      setResult(result + firstNum);
      setInput("");
    }
  };

  const EqualHandler = () => {
    const newResult = result + parseInt(input);
    setResult(newResult);
    setInput(newResult);
  };

  const ResetHandler = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="Main">
      {/* Renders every other components */}
      <Head theme={theme} Settheme={Settheme} />
      <Input theme={theme} initialInput={input} />
      <Keys
        theme={theme}
        Settheme={Settheme}
        AddHandler={AddHandler}
        EqualHandler={EqualHandler}
        ResetHandler={ResetHandler}
        ClickHandler={ClickHandler}
      />
    </div>
  );
}

export default Main;
