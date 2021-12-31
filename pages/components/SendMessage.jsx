import { useState } from "react";
import { useMoralis } from "react-moralis";
import { FaGripLinesVertical } from "react-icons/fa";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          // the object was saved successfully
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };

  return (
    <form className="flex fixed bottom-10 bg-gray-900 opacity-75 w-11/12 px-6 py-4 max-w-2xl rounded-xl shadow-2xl ">
      <input
        type="text"
        className="flex-grow outline-none bg-transparent text-white  placeholder-slate-400 pr-5"
        placeholder={`Enter your Message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex items-center justify-center px-4">
        <FaGripLinesVertical className="text-2xl text-white right-2" />
      </div>
      <button
        onClick={sendMessage}
        type="submit"
        className="font-bold text-red-400"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
