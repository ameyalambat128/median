import Head from "next/head";
import logo from "./../assets/logo.png";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  {
    !isAuthenticated && (
      <>
        <Head>
          <title>Median</title>
          <link rel="icon" href="./logo.png" />
        </Head>
        <Login />
      </>
    );
  }
  return (
    <div className="h-screen font-source bg-gradient-to-b from-red-300 to-red-100 overflow-hidden">
      <Head>
        <title>Median</title>
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className="h-screen overflow-y-scroll">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div>
      </div>
    </div>
  );
}
