import React, { Fragment, useState } from "react";
import BoardMessage from "./BoardMessage";

interface ButtonFloatProps {
  onClick: () => void;
}

const ButtonFloat: React.FC<ButtonFloatProps> = ({ onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
    onClick();
  };

  return (
    <Fragment>
      <button
        className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300"
        onClick={handleButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w- h-6"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6v6h6v2h-6v6h-2v-6H6v-2h6V6h2zm0-4a8 8 0 1 0 .001 16.001A8 8 0 0 0 12 2zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
        </svg>
      </button>
      {isModalOpen ? <BoardMessage setOpen={setIsModalOpen} /> : <></>}
    </Fragment>
  );
};

export default ButtonFloat;
