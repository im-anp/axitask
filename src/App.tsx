import React, { useState } from "react";
import { ButtonColor, LastClicked } from "./App.types";
import { Card, CardWrapper, StyledButton } from "./styles";

const App: React.FC = () => {
  const [lastClicked, setLastClicked] = useState<LastClicked>(undefined);
  const [buttonColor, setButtonColor] = useState<ButtonColor>("red");

  const onClick = () => {
    setLastClicked(new Date());
    setButtonColor(getNextButtonColor());
  };

  const getNextButtonColor = (): ButtonColor => {
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
    <CardWrapper>
      <Card>
        <StyledButton onClick={onClick} color={buttonColor}>
          Click
        </StyledButton>
        <p>
          Last clicked:{" "}
          {lastClicked !== undefined ? lastClicked.toString() : "Never"}
        </p>
      </Card>
    </CardWrapper>
  );
};

export default App;
