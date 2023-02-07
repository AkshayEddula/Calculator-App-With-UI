import "../css/Keys.css";
// const items = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "X"];

function Keys(props) {
  // let id = Math.floor(Math.random() * 100);

  return (
    <div className="Keys">
      <div className="K1">
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          7
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          8
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          9
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="DEL num"
        >
          DEL
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          4
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          5
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          6
        </h1>
        <h1
          onClick={(e) => {
            props.AddHandler(e);
          }}
          className="num"
        >
          +
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          1
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          2
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          3
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          -
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          .
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          0
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          /
        </h1>
        <h1
          onClick={(e) => {
            props.ClickHandler(e);
          }}
          className="num"
        >
          X
        </h1>
      </div>
      <div className="K2">
        <h1 onClick={props.ResetHandler} className="Reset">
          RESET
        </h1>
        <div onClick={props.EqualHandler} className="Equal">
          =
        </div>
      </div>
    </div>
  );
}

export default Keys;
