import { useState } from "react";
import "./App.css";
import NoButton from "./components/NoButton";
import YesButton from "./components/YesButton";

function App() {
  const [yes, setYes] = useState(false);

  const [buttonPadding, setButtonPadding] = useState({ x: 6, y: 4 });
  const [buttonFontSize, setButtonFontSize] = useState(24);

  const handleNoClick = () => {
    setButtonPadding((currentPadding) => ({
      x: currentPadding.x + 10,
      y: currentPadding.y + 10,
    }));
    setButtonFontSize((currentFontSize) => currentFontSize * 1.2);
  };

  const handleYesClick = () => {
    setYes(true);
  };
  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center p-4">
      {yes ? (
        <>
          <img src="./images/kisses.gif" />
          <h1 className="text-4xl font-bold text-black mt-6">Yayy!!!</h1>
        </>
      ) : (
        <div className="bg-white rounded-lg p-8">
          <img
            className="w-64 h-64 object-cover mx-auto transform transition duration-500"
            src="./images/valentine.gif"
            alt="Heart"
          />
          <h1 className="text-4xl font-bold text-black mt-6">
            Will you be my Valentine?
          </h1>
          <div className="mt-6 text-center">
            <YesButton
              buttonPadding={buttonPadding}
              buttonFontSize={buttonFontSize}
              onClick={handleYesClick}
            />
            <NoButton onClick={handleNoClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
