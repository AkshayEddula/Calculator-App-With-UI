import "../css/Main.css";
import Head from "./Head";
import Input from "./Input";
import Keys from "./Keys";

function Main() {
  return (
    <div className="Main">
      {/* Renders every other components */}
      <Head />
      <Input />
      <Keys />
    </div>
  );
}

export default Main;
