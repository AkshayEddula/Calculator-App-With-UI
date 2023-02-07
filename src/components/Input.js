import "../css/Input.css";

function Input(props) {
  return (
    <>
      <input value={props.initialInput} readOnly></input>
    </>
  );
}

export default Input;
