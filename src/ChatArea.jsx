import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import InputBar from "./components/InputBar";
import Chatbox from "./components/Chatbox";
import Tip from "./components/Tip";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/context";
import { ScaleLoader } from "react-spinners";
import SearchChats from "./components/SearchChats";
import Loading from "./components/UI/Loading";

const ChatArea = () => {
  const[isActive,setIsActive] = useState(false)
  const [isSerachActive,setSearchActive] = useState(false)
  const { user } = useContext(AuthContext);

  // safely parse session storage
  let authorizeduser = null;
  try {
    authorizeduser = JSON.parse(sessionStorage.getItem("user"));
  } catch (err) {
    authorizeduser = null;
  }
  
  if (!authorizeduser && user === null) {
    return <Loading/>
  }

  return (
    <main className="w-full h-dvh max-h-dvh flex bg-bacground">
      <Sidebar isActive={isActive} setIsActive={setIsActive} setSearchActive={setSearchActive} />
      <section className="flex-1 flex flex-col p-3">
        <Navbar setIsActive={setIsActive}/>
        <Chatbox/>
        <InputBar />
        <Tip/>
        {isSerachActive && <SearchChats setSearchActive={setSearchActive}/>}
      </section>
    </main>
  );
};

export default ChatArea;