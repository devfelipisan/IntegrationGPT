import { useState } from "react";
import { MessageProps, MessageReceiver, MessageSender } from "./mensagem";
import { QuestionRequest } from "@/hooks/questionRequests";

interface IsModalOpenProps {
  setOpen: any;
}

const BoardMessage: React.FC<IsModalOpenProps> = ({ setOpen }) => {
  const [messages, setMessages] = useState<Array<MessageProps>>([
    { text: "Olá tudo bem? Em que posso te ajudar hoje?", isSender: true },
  ]);
  const [questionValue, setQuestionValue] = useState<string>("");

  const handleCloseModal = () => {
    setOpen(false);
  };

  async function PostRequest(question: string) {
    const result = await QuestionRequest(question).then((i) => {
      return i;
    });

    const answerValue = {
      text: result,
      isSender: true,
    };
    setMessages((message: any) => [...message, answerValue]);
    return result;
  }

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    const questionInput = event.currentTarget.elements.namedItem(
      "question"
    ) as HTMLTextAreaElement;
    if (questionInput) {
      const questionValue = { text: questionInput.value, isSender: false };
      setMessages((message: any) => [...message, questionValue]);
      PostRequest(questionValue.text);
    }
    setQuestionValue("");
  };

  const handleChange = (event: any) => {
    setQuestionValue(event.target.value);
  };

  function MessageRenderCondicional(message: MessageProps, index: number) {
    if (message.isSender) {
      return (
        <MessageSender
          key={index}
          isSender={message.isSender}
          text={message.text}
        />
      );
    }
    return (
      <MessageReceiver
        key={index}
        isSender={message.isSender}
        text={message.text}
      />
    );
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleCloseModal}
    >
      <div
        className="overflow-y-auto fixed bottom-4 right-16 bg-gray-100 rounded-lg shadow-lg p-4 transform transition-all duration-300"
        style={{
          width: "400px",
          maxWidth: "70vw",
          maxHeight: "70vh",
          height: "400px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col space-y-4">
          {messages?.map((message: MessageProps, index: number) =>
            MessageRenderCondicional(message, index)
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex mt-16">
          <textarea
            name="question"
            className="flex-grow  p-2 mr-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
            rows={2}
            placeholder="Escreva sua mensagem..."
            value={questionValue}
            onChange={handleChange}
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
  );
};

export default BoardMessage;
