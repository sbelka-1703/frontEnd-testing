import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButttonColor] = useState("red");
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false)
  return (
    <div>
      <button style={{ backgroundColor: buttonColor }}
      onClick={() => setButttonColor(newButtonColor) }
      disabled = {disabled}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={(e) => setDisabled(e.target.checked)}/>
    </div>
  );
}

export default App;
