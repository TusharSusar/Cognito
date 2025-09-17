import React from "react";
import { FiEdit } from "react-icons/fi";
import logo from "../assets/cognito Logo.png";
import { RiChatHistoryFill } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

function Sidebar() {
  return (
    <section className="w-60 h-full border-r border-border">
      <div className="logo flex items-center border-b border-b-border">
        <img src={logo} alt="Logo" className="w-15 h-15" />
        <h1 className="text-text text-lg font-bold">Cognito</h1>
      </div>
      <main className="w-full flex flex-col justify-between p-3 mt-2">
        <div className="top-container w-full ">
          <input
            type="search"
            name="search"
            placeholder="Serach Chats"
            autoComplete="off"
            className="w-full px-1.5 py-1.5 text-text bg-item-hover outline-0 rounded-sm"
          />
          <ul className="text-text mt-4">
            <li className="sidebaritem">
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
        <div className="chatlist grow"></div>
        <p className="sidebaritem text-text"><span><IoIosSettings /></span>Settings</p>
      </main>
    </section>
  );
}

export default Sidebar;
