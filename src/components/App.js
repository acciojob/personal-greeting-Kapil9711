import React from "react";
import "./../styles/App.css";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div>
      <p>Enter your name:</p>
      <br />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      {inputValue.length > 0 && <p>Hello {inputValue}!</p>}
    </div>
  );
};

export default App;
