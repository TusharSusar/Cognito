import React, { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import logo from "../assets/cognito Logo.png";
import { RiChatHistoryFill } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { ChatContext } from "../context/context";

function Sidebar() {
  const [chats, setChats] = useState([]);
  const { createNewChat, onSelectChat } = useContext(ChatContext);

  useEffect(() => {
    const output = onSnapshot(collection(db, "chats"), (chat) => {
      setChats(chat.docs);
      console.log(chat.docs);
    });
  }, []);

  return (
    <section className="md:inline md:w-60 h-full border-r flex border-border">
      <div className="logo flex items-center border-b border-b-border">
        <img src={logo} alt="Logo" className="w-15 h-15" />
        <h1 className="text-text text-lg font-bold">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Cognito
          </a>
        </h1>
      </div>
      <main className="w-full flex flex-col justify-between p-3 mt-2">
        <div className="top-container w-full ">
          <input
            type="search"
            name="search"
            placeholder="Serach Chats"
            autoComplete="off"
            className="w-full px-3 py-1.5 text-text bg-input-bg focus:bg-black border border-transparent focus:border-border outline-0 rounded-md"
          />
          <ul className="text-text mt-4">
            <li
              onClick={() => createNewChat()}
              className="sidebaritem text-primary"
            >
              <span>
                <FiEdit />
              </span>
              New Chat
            </li>
            <li className="sidebaritem">
              <span>
                <RiChatHistoryFill />
              </span>
              Chats
            </li>
            <li className="sidebaritem">
              <span>
                <MdHelpOutline />
              </span>
              Help
            </li>
          </ul>
        </div>
        <div className="chatlist flex-1 min-h-60">
          <ul className="my-4 space-y-2">
            {chats.map((chat) => (
              <li
                key={chat.id}
                className="p-2 hover:bg-item-hover cursor-pointer rounded"
                onClick={() => onSelectChat(chat.id)}
              >
                <div className="text-sm font-medium text-text">
                  {chat.data().title || "Untitled Chat"}
                </div>
                <div className="text-xs text-gray-400">
                  {chat.timestamp?.toDate
                    ? chat.timestamp.toDate().toLocaleString()
                    : ""}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="sidebaritem text-text">
          <span>
            <IoIosSettings />
          </span>
          Settings
        </p>
      </main>
    </section>
  );
}

export default Sidebar;
