import React, { useContext, useState } from "react";
import { FaMicrophoneLines } from "react-icons/fa6";
import { FiPaperclip } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { ChatContext } from "../context/context";

function InputBar() {
  const { input,setInput,setMessages, getResponse } = useContext(ChatContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages((prev)=> ([
      ...prev,
      input
    ]))
    if(!input.trim()) return; 
    getResponse()
    console.log("Submitted :", input);
  };
  return (
    <section className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bar w-1/3 min-w-[90%] lg:min-w-2xl px-3 py-2 gap-2 flex flex-col border border-secondary rounded-xl"
      >
        <div className="input flex-1">
          <input
            type="text"
            placeholder="Messege Cognito....."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 w-full text-text outline-0 border-0 wrap-break-word"
          />
        </div>
        <div className="toolbar flex items-center justify-between">
          <div className="upload p-1.5 flex gap-3">
            <span className="p-2 rounded-full hover:bg-item-hover cursor-pointer">
              <FiPaperclip size={18} color="#f1f1f1" />
            </span>
            <span className="p-2 rounded-full hover:bg-item-hover cursor-pointer">
              <FaMicrophoneLines color="#f1f1f1" />
            </span>
          </div>
          <button
            type="submit"
            className="p-2.5 cursor-pointer bg-primary rounded-full"
          >
            <span>
              <IoSend />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
}
export default InputBar;
