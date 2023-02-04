import "../css/Number.css";

function Number(props) {
  return (
    <div className="number">
      <h1 className={props.number}>{props.number}</h1>
    </div>
  );
}

export default Number;
