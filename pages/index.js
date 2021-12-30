import Head from "next/head";
import Login from "./components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }
  return (
    <div className="h-screen">
      <Head>
        <title>Dapp Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Median</h1>
      <button onClick={logout} className="">
        Logout
      </button>
    </div>
  );
}
