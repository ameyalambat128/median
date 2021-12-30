import Image from "next/image";
import { useMoralis } from "react-moralis";

import logo from "../../assets/logo.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="text-white">
      <div className="">
        <div className="relative h-24 w-24">
          <Image src={logo} alt="logo" layout="responsive" objectFit="" />
        </div>

        <div className="">
          <div className="relative h-48 w-48 lg:mx-auto">
            <Avatar logoutOnClick />
          </div>
          <h1 className="text-3xl ">Welcome to Median</h1>
          <h2 className="text-5xl truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
