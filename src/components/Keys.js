import "../css/Keys.css";
import Number from "./Number";

const items = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "X"];

function Keys() {
  return (
    <div className="Keys">
      <div className="K1">
        {items.map((number) => (
          <Number number={number} />
        ))}
      </div>
      <div className="K2">
        <h1 className="Reset">RESET</h1>
        <div className="Equal">=</div>
      </div>
    </div>
  );
}

export default Keys;
