import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username, logoutOnClick }) => {
  const { user, logout } = useMoralis();

  return (
    <Image
      className="rounded-full bg-black cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/identicon/${
        username || user.get("username")
      }.svg`}
      onClick={() => logoutOnClick && logout()}
      layout="fill"
      objectFit="fit"
    />
  );
};

export default Avatar;
