import React, { useContext } from "react";
import Menu from "./UI/Menu";
import { FaAngleDown } from "react-icons/fa6";
import { AuthContext } from "../context/context";

function Navbar({ setIsActive }) {

  const {logout} = useContext(AuthContext)

  return (
    <div className="flex items-center justify-between px-2 md:px-4 mb-8 md:mb-4">
      <div className="flex items-center space-x-2">
        <div onClick={()=> setIsActive(true)} className="p-2 hover:bg-item-hover rounded-full cursor-pointer md:hidden">
          <Menu width={25} height={25} color="#fff" />
        </div>
        <span className="text-text text-sm font-semibold hover:bg-item-hover px-2 py-2 md:px-4 flex items-center justify-center gap-2 rounded-md cursor-pointer">
          Cognito
          <span>
            <FaAngleDown />
          </span>
        </span>
      </div>
      <h1 className="upgrade inline text-sm md:text-md text-text px-6 py-2 font-semibold rounded-full bg-[linear-gradient(120deg,rgba(137,247,254,0.7)_0%,rgba(102,166,255,0.7)_100%)] cursor-pointer">
        Upgrade
      </h1>
      {/* <button type="button" className="text-sm md:text-md text-text px-6 py-2 font-semibold rounded-md hover:bg-red-600/30 cursor-pointer" onClick={logout}>Logout</button> */}
    </div>
  );
}

export default Navbar;
