import "../css/Input.css";

function Input(props) {
  return (
    <>
      <input
        className={`theme${props.theme}`}
        value={props.initialInput}
        readOnly
      ></input>
    </>
  );
}

export default Input;
