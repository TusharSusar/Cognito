import React from "react";
import Sidebar from "./components/Sidebar";
import InputBar from "./components/InputBar";
import Chatbox from "./components/Chatbox";
import Tip from "./components/Tip";
import Navbar from "./components/Navbar";

const ChatArea = () => {
  return (
    <main className="w-full h-dvh max-h-dvh flex bg-bacground">
      <Sidebar />
      <section className="flex-1 flex flex-col p-3">
        <Navbar/>
        <Chatbox/>
        <InputBar />
        <Tip/>
      </section>
    </main>
  );
};

export default ChatArea;