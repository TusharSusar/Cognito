import React, { useContext, useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import logo from "../assets/logo1.png";
import { RiChatHistoryFill } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { ChatContext } from "../context/context";
import Menu from "./UI/Menu";
import { useNavigate } from "react-router-dom";

function Sidebar({ isActive, setIsActive }) {
  const [chats, setChats] = useState([]);
  const { createNewChat, onSelectChat } = useContext(ChatContext);

  const navigate = useNavigate();

  useEffect(() => {
    const output = onSnapshot(collection(db, "chats"), (chat) => {
      setChats(chat.docs);
      console.log(chat.docs);
    });
  }, []);

  const handleSelect = (chat) => {
    onSelectChat(chat.id);
    navigate(`/chat/${chat.id}`);
    console.log("under select Function....");
  };

  // const formatTimestamp = (timestamp) => {
  //   if (!timestamp?.toDate) return "";

  //   const date = timestamp.toDate();
  //   const now = new Date();
  //   const diffInMs = now - date;
  //   const diffInHours = diffInMs / (1000 * 60 * 60);
  //   const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  //   if (diffInHours < 24) {
  //     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   } else if (diffInDays < 7) {
  //     return date.toLocaleDateString([], { weekday: 'short' });
  //   } else {
  //     return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  //   }
  // };

  return (
    <>
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #6b7280 transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
          height: 2px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #6b7280;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
      `}</style>

      {/* Mobile backdrop - separate from sidebar */}
      {isActive && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-40"
          onClick={() => setIsActive(false)}
        />
      )}

      <section
        className={`${
          isActive
            ? "fixed left-0 top-0 w-80 z-50 bg-bacground"
            : "w-0 bg-bacground overflow-hidden"
        } md:static md:w-60 md:block h-full border-r border-border transition-all duration-300 ease-in-out`}
      >
        <div className="logo flex items-center justify-between border-b border-b-border p-4">
          <div className="logo-cap flex items-center">
            <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
            <h1 className="text-text text-lg font-bold">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Cognito
              </a>
            </h1>
          </div>
          <div
            onClick={() => setIsActive(false)}
            className="p-2 hover:bg-item-hover rounded-full cursor-pointer md:hidden"
          >
            <Menu width={25} height={25} color="#fff" />
          </div>
        </div>

        <main className="w-full h-full flex flex-col p-3 custom-scrollbar">
          <div className="top-container w-full mb-4">
            <input
              type="search"
              name="search"
              placeholder="Search Chats"
              autoComplete="off"
              className="w-full px-3 py-2 text-text bg-input-bg focus:bg-black border border-transparent focus:border-border outline-none rounded-md transition-colors"
            />

            <ul className="text-text mt-4 space-y-1">
              <li
                onClick={() => createNewChat()}
                className="sidebaritem text-primary flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors"
              >
                <span className="text-lg">
                  <FiEdit />
                </span>
                New Chat
              </li>
              <li className="sidebaritem flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors">
                <span className="text-lg">
                  <RiChatHistoryFill />
                </span>
                Chats
              </li>
              <li className="sidebaritem flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors">
                <span className="text-lg">
                  <MdHelpOutline />
                </span>
                Help
              </li>
            </ul>
          </div>

          {/* Chat list with proper scrolling */}
          <div className="chatlist flex-1 overflow-y-auto min-h-0 custom-scrollbar">
            <ul className="space-y-1">
              {chats.map((chat) => (
                <li
                  key={chat.id}
                  className="p-1.5 hover:bg-item-hover cursor-pointer rounded-md transition-colors group"
                  onClick={() => handleSelect(chat)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-text truncate">
                        {chat.data().title || "Untitled Chat"}
                      </div>
                      {/* <div className="text-xs text-gray-400 mt-1">
                    {formatTimestamp(chat.data().timestamp)}
                  </div> */}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                      <button className="text-gray-400 hover:text-gray-300 p-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Settings at bottom */}
          <div className="pt-2 border-t border-border">
            <div className="sidebaritem text-text flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors">
              <span className="text-lg">
                <IoIosSettings size={20} color="#ffffff" />
              </span>
              Settings
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Sidebar;
