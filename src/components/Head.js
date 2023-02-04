import "../css/Head.css";

function Head() {
  return (
    <div className=" Head">
      {/* Renders Heading and themes Page */}
      <div className="M1">
        <div className="N1">
          <h1>calc</h1>
        </div>
        <div className="N2">
          <h4>THEME</h4>
          <div className="themes">
            <div className="M1-a">
              <h4>1</h4>
              <h4>2</h4>
              <h4>3</h4>
            </div>
            <div className="M1-b">
              {/* add active class */}
              <span className="H active"></span>
              <span className="H"></span>
              <span className="H"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Head;
