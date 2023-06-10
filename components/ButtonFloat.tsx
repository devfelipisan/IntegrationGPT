// import React, { useState, useEffect, useRef } from "react";
// import MessageIframe from "./MessageIframe";

// interface ButtonFloatProps {
//   onClick: () => void;
// }

// const ButtonFloat: React.FC<ButtonFloatProps> = ({ onClick }) => {
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const [isIframeOpen, setIsIframeOpen] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target as Node)
//       ) {
//         setIsIframeOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleButtonClick = () => {
//     setIsIframeOpen(true);
//     onClick();
//   };

//   return (
//     <>
//       <button
//         ref={buttonRef}
//         className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300"
//         onClick={handleButtonClick}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-6 h-6"
//         >
//           <path d="M0 0h24v24H0z" fill="none" />
//           <path d="M12 6v6h6v2h-6v6h-2v-6H6v-2h6V6h2zm0-4a8 8 0 1 0 .001 16.001A8 8 0 0 0 12 2zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
//         </svg>
//       </button>

//       {isIframeOpen && (
//         <div
//           className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-lg"
//           style={{ width: "500px", height: "400px" }}
//         >
//           <MessageIframe isOpen={isIframeOpen} />
//         </div>
//       )}
//     </>
//   );
// };

// export default ButtonFloat;

import React, { useState } from "react";
import { MessageReceiver, MessageSender } from "./mensagem";

interface ButtonFloatProps {
  onClick: () => void;
}

const ButtonFloat: React.FC<ButtonFloatProps> = ({ onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    setIsModalOpen(true);
    onClick();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica de envio da mensagem aqui

    // Limpar o campo de mensagem após o envio
    setMessage("");
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300"
        onClick={handleButtonClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 6v6h6v2h-6v6h-2v-6H6v-2h6V6h2zm0-4a8 8 0 1 0 .001 16.001A8 8 0 0 0 12 2zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
        </svg>
      </button>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="overflow-y-auto fixed bottom-4 right-16 bg-gray-100 rounded-lg shadow-lg p-4 transform transition-all duration-300"
            style={{ width: "400px", height: "400px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-4">
              <MessageSender isSender={true} text="Olá, como você está?" />
              <MessageReceiver
                isSender={false}
                text="Oi! Estou bem, obrigado!"
              />
              <MessageSender
                isSender={true}
                text="Que bom! O que você tem feito?"
              />
              <MessageReceiver
                isSender={false}
                text="Tenho estudado bastante e também saí com amigos."
              />
            </div>
            <form onSubmit={handleSubmit} className="flex mt-16">
              <textarea
                value={message}
                onChange={handleChange}
                className="flex-grow  p-2 mr-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                rows={2}
                placeholder="Escreva sua mensagem..."
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonFloat;
