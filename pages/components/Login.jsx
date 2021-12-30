import Image from "next/image";
import background from "../../assets/bg.jpg";
import logo from "../../assets/logo.png";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1 className="">This is the login page</h1>
      <div className="flex flex-col w-full absolute items-center justify-center z-50 h-4/6 space-y-8">
        <Image className="" src={logo} alt="logo" height={100} width={100} />
        <button
          onClick={authenticate}
          className="bg-red-300 p-4 font-sans font-medium rounded-lg shadow-lg hover:brightness-110"
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
