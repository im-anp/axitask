import React, { useState } from "react";

const App: React.FC = () => {
  const [lastClicked, setLastClicked] = useState<Date | undefined>(undefined);
  const [buttonColor, setButtonColor] = useState<"red" | "blue" | "green">("red");

  const onClick = () => {
    setLastClicked(new Date());
    setButtonColor(getNextButtonColor());
  };

  const getNextButtonColor = (): "red" | "blue" | "green" => {
    switch (buttonColor) {
      case "red":
        return "blue";
      case "blue":
        return "green";
      case "green":
        return "red";
      default:
        throw new Error("Invalid color");
    }
  };

  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: buttonColor }}>
        Click
      </button>
      <p>
        Last clicked:{" "}
        {lastClicked !== undefined ? lastClicked.toString() : "Never"}
      </p>
    </div>
  );
}

export default App;
