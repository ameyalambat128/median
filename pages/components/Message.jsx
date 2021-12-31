import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import TimeAgo from "timeago-react";

const Message = ({ message }) => {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div
        className={`relative h-8 w-8 ${!isUserMessage && "order-last ml-2"}`}
      >
        <Avatar username={message.get("username")} />
      </div>

      <div
        className={`flex space-x-4 p-3 rounded-md ${
          isUserMessage
            ? "rounded-br-none bg-red-400"
            : "rounded-br-none bg-gray-400"
        }`}
      >
        <p className="">{message.get("message")}</p>
      </div>

      <TimeAgo
        dateTime={message.createdAt}
        className={`text-[10px] italic text-slate-400 ${
          isUserMessage && "order-first pr-1"
        }`}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-blue-300" : "text-gray-400"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Message;
