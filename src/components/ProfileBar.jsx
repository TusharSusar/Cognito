import React, { useContext, useState } from "react";
import { IoSettingsSharp, IoStarHalf } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { TbCirclesRelation, TbHelpHexagonFilled } from "react-icons/tb";
import { AuthContext } from "../context/context";

function ProfileBar() {
  const authorizeduser = JSON.parse(sessionStorage.getItem("user"));

  const name = authorizeduser?.name;
  const email = authorizeduser?.email || "guest@example.com";
  const nameInitial = name.charAt(0).toUpperCase();

  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative w-full min-h-12 text-text flex items-center justify-between px-2 hover:bg-item-hover border-t border-t-border rounded-md cursor-pointer transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="profile-name text-sm flex items-center space-x-2">
        <span className="px-2.5 py-1 text-black bg-amber-200 rounded-full">
          {nameInitial}
        </span>
        <strong>{name}</strong>
      </div>
      <button
        type="button"
        className="px-2.5 py-1.5 rounded-full text-sm border border-border"
      >
        Upgarde
      </button>
      {open && <ProfileDropdown email={email} />}
    </div>
  );
}

export default ProfileBar;

const ProfileDropdown = ({ email }) => {
  const { logout } = useContext(AuthContext);

  return (
    <ul className="absolute right-0 bottom-full mb-2 p-1 w-full bg-dropdown shadow-lg rounded-lg py-2 text-sm z-50">
      <li className="px-4 py-2 text-text/50">{email}</li>
      <li className="px-4 py-2 flex items-center rounded-md hover:bg-black/30 select-none cursor-pointer">
        <span className="pr-3">
          <IoStarHalf />
        </span>{" "}
        Upgrade plan
      </li>
      <li className="px-4 py-2 flex items-center rounded-md hover:bg-black/30 cursor-pointer">
        <span className="pr-3">
          <TbCirclesRelation />
        </span>
        Personalization
      </li>
      <li className="px-4 py-2 flex items-center rounded-md hover:bg-black/30 cursor-pointer">
        <span className="pr-3">
          <IoSettingsSharp />
        </span>
        Settings
      </li>
      <hr className="my-1" />
      <li className="px-4 py-2 flex items-center rounded-md hover:bg-black/30 cursor-pointer">
        <span className="pr-3">
          <TbHelpHexagonFilled />
        </span>
        Help
      </li>
      <li
        onClick={logout}
        className="px-4 py-2 flex items-center rounded-md hover:bg-red-700/30 hover:text-white cursor-pointer text-red-600"
      >
        <span className="pr-3">
          <LuLogOut />
        </span>
        Log out
      </li>
    </ul>
  );
};
