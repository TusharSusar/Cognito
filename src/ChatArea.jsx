import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import InputBar from "./components/InputBar";
import Chatbox from "./components/Chatbox";
import Tip from "./components/Tip";
import Navbar from "./components/Navbar";

const ChatArea = () => {
  const[isActive,setIsActive] = useState(false)
  return (
    <main className="w-full h-dvh max-h-dvh flex bg-bacground">
      <Sidebar isActive={isActive} setIsActive={setIsActive}/>
      <section className="flex-1 flex flex-col p-3">
        <Navbar setIsActive={setIsActive}/>
        <Chatbox/>
        <InputBar />
        <Tip/>
      </section>
    </main>
  );
};

export default ChatArea;