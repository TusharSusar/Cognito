import React from "react";
import Sidebar from "./components/Sidebar";
import InputBar from "./components/InputBar";
import Chatbox from "./components/Chatbox";
import Tip from "./components/Tip";

const App = () => {
  return (
    <main className="w-full h-dvh max-h-dvh flex bg-bacground">
      <Sidebar />
      <section className="flex-1 flex flex-col p-3">
        <Chatbox/>
        <InputBar />
        <Tip/>
      </section>
    </main>
  );
};

export default App;
