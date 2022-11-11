import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButttonColor] = useState("red");
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button style={{ backgroundColor: buttonColor }}
      onClick={() => setButttonColor(newButtonColor) }
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
