import Head from "next/head";

import Login from "./components/Login";
import { useMoralis } from "react-moralis";
import Header from "./components/Header";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <div className="h-screen bg-gradient-to-b from-red-300 to-white overflow-hidden">
      <Head>
        <title>Dapp Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen overflow-y-scroll">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          {/* <Messages /> */}
        </div>
      </div>
      <button onClick={logout} className="p-10 bg-white z-50">
        Logout
      </button>
    </div>
  );
}
