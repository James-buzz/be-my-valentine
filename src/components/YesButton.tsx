import React from "react";

type YesButtonProps = {
  buttonPadding: {
    x: number;
    y: number;
  };
  buttonFontSize: number;
  onClick: () => void;
};

const YesButton: React.FC<YesButtonProps> = (props) => {
  return (
    <button
      className={`border-black border-4 rounded-xl font-black hover:bg-black hover:text-white`}
      style={{
        padding: `${props.buttonPadding.y}px ${props.buttonPadding.x}px`,
        fontSize: props.buttonFontSize,
      }}
      onClick={() => props.onClick()}
    >
      Yes
    </button>
  );
};

export default YesButton;
