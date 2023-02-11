import "../css/Keys.css";

function Keys(props) {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // function to display the digits on the key component
  const displayNum = () => {
    const digits = [];
    for (let i = 0; i < items.length; i++) {
      digits.push(
        <button onClick={() => props.updateInput(items[i])} key={i}>
          {items[i]}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className={`Keys themes${props.theme}`}>
      <div className="K1">
        <div className="K-a">{displayNum()}</div>
        <div className="K1-1">
          <button onClick={() => props.updateInput(0)}>0</button>
          <button onClick={() => props.updateInput(".")}>.</button>
          <button onClick={props.equalHandler}>=</button>
        </div>
      </div>
      <div className="K2">
        <button onClick={() => props.updateInput("+")}>+</button>
        <button onClick={() => props.updateInput("-")}>-</button>
        <button onClick={() => props.updateInput("*")}>*</button>
        <button onClick={() => props.updateInput("/")}>/</button>
      </div>
      <div className="K3">
        <button onClick={props.ResetHandler}>RESET</button>
        <button onClick={props.DeleteHandler}>DEL</button>
      </div>
    </div>
  );
}

export default Keys;
