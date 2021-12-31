import { useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { user } = useMoralis();
  return (
    <div className="pb-56">
      <div className=""></div>
      <div className="flex justify-center">
        <SendMessage />
      </div>
      <div className="text-base font-light text-center text-gray-900 mt-5 ">
        <p>You're up to date {user.getUsername()}! 🎊</p>
      </div>
    </div>
  );
};

export default Messages;
