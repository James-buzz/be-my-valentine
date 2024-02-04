import React, { useState } from "react";
import buttonMessages from "../helpers/buttonText";

type NoButtonProps = {
  onClick: () => void;
};

const NoButton: React.FC<NoButtonProps> = ({ onClick }) => {
  const [messageIndex, setMessageIndex] = useState(0);

  const handleClick = () => {
    onClick();
    setMessageIndex((prevIndex) => (prevIndex + 1) % buttonMessages.length);
  };

  return (
    <button
      className="ml-2 px-2 py-1 text-2xl border-black border-4 rounded-xl font-black hover:bg-black hover:text-white"
      onClick={handleClick}
    >
      {buttonMessages[messageIndex]}
    </button>
  );
};

export default NoButton;
