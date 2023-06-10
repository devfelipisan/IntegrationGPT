import React from "react";

interface MessageProps {
  text: string;
  isSender: boolean;
}

const MessageSender: React.FC<MessageProps> = ({ text }) => {
  return (
    <div className="flex justify-start items-start mb-4">
      <div className="bg-blue-200 rounded-lg py-2 px-4 text-white-200 max-w-sm">
        <p
          className="text-sm text-shadow"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

const MessageReceiver: React.FC<MessageProps> = ({ text }) => {
  return (
    <div className="flex justify-end items-start mb-4">
      <div className="bg-blue-100 rounded-lg py-2 ml-4 px-4 text-white-200 max-w-sm opacity-70">
        <p
          className="text-sm text-shadow"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export { MessageSender, MessageReceiver };
