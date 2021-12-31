import Image from "next/image";
import { useMoralis } from "react-moralis";

import logo from "../assets/logo.png";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="sticky text-white top-2 p-5 z-50 bg-gray-900 rounded-xl shadow-2xl">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:item-center">
        <div className="relative h-34 w-20 mx-auto hidden lg:inline-grid">
          <Image src={logo} className="" layout="" objectFit="cover" />
        </div>

        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto">
            <Avatar logoutOnClick />
          </div>
          <h1 className="font-source text-3xl ">Welcome to Median</h1>
          <h2 className="font-source text-5xl truncate p-1">
            {user.getUsername()}
          </h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
