import Image from "next/image";
import background from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";
import { useMoralis } from "react-moralis";
import React, { useState } from "react";

const Login = () => {
  const { authenticate } = useMoralis();
  const [page, setPage] = useState();
  return (
    <div className="bg-black relative">
      <div className="flex flex-col w-full absolute items-center justify-center z-50 h-4/6 space-y-4">
        <Image
          className=""
          src={logo}
          alt="logo"
          layout="intrinsic"
          objectFit="contain"
          height={150}
          width={200}
          quality={100}
        />

        <button
          onClick={authenticate}
          className="bg-red-300 p-4 font-sans font-medium rounded-lg shadow-lg hover:brightness-110 transition-all ease-in-out hover:px-10 "
        >
          Login to MEDIAN
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src={background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
