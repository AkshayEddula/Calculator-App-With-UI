import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  // Theme Switcher
  const [theme, Settheme] = useState(1);

  return (
    <div className={`App theme${theme}`}>
      {/* Main Component - Renders Every Thing */}
      <Main theme={theme} Settheme={Settheme} />
    </div>
  );
}

export default App;
