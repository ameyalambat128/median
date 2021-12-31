import Head from "next/head";

import Login from "./components/Login";
import { useMoralis } from "react-moralis";
import Header from "./components/Header";
import Messages from "./components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <div className="h-screen bg-gradient-to-b from-red-300 to-red-100 overflow-hidden">
      <Head>
        <title>Dapp Chat</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <div className="h-screen overflow-y-scroll">
        <div className="pt-3 px-1 max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div>
      </div>
    </div>
  );
}
