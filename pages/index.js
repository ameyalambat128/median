import Head from "next/head";
import logo from "./../assets/logo.png";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";
import { useState } from "react";

// a = red
// b blue
// c = green
// d = red
const colorChange = (mess) => {
  let firstLetter = mess.charCodeAt(0);
  let firstColor = (firstLetter - 1) % 3;
  const red = 0;
  const blue = 1;
  const green = 2;
  if (firstColor === red) return "#ff0000";
  if (firstColor === blue) return "#0000ff";
  if (firstColor === green) return "#00ff00";
};

export default function Home() {
  const { isAuthenticated } = useMoralis();
  const [message, setMessage] = useState("");

  if (!isAuthenticated) {
    return (
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
    <div
      style={{ backgroundColor: colorChange(message) }}
      //className="h-screen font-source bg-gradient-to-b from-red-300 to-red-100 overflow-hidden"
    >
      <Head>
        <title>Median</title>
        <link rel="icon" href="./logo.png" />
      </Head>

      <div className="h-screen overflow-y-scroll">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages message={message} setter={setMessage} />
        </div>
      </div>
    </div>
  );
}
