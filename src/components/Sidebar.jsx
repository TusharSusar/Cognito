// import React, { useContext, useEffect, useState } from "react";
// import { FiEdit } from "react-icons/fi";
// import logo from "../assets/logo1.png";
// import { RiChatHistoryFill } from "react-icons/ri";
// import { MdHelpOutline } from "react-icons/md";
// import { IoIosSettings } from "react-icons/io";
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { db } from "./firebase";
// import { AuthContext, ChatContext } from "../context/context";
// import Menu from "./UI/Menu";
// import { useNavigate } from "react-router-dom";
// import { HashLoader } from "react-spinners";
// import ProfileBar from "./ProfileBar";

// function Sidebar({ isActive, setIsActive }) {
//   // const [chats, setChats] = useState([]);
//   // const { createNewChat, onSelectChat } = useContext(ChatContext);
//   // const [isCapsuleLoading, setIsCapsuleLoading] = useState(true);
//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   try {
//   //     onSnapshot(collection(db, "chats"), (chat) => {
//   //       setChats(chat.docs);
//   //       // console.log(chat.docs);
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   } finally {
//   //     setIsCapsuleLoading(false);
//   //   }
//   // }, []);

//   // const handleSelect = (chat) => {
//   //   onSelectChat(chat.id);
//   //   navigate(`/chat/${chat.id}`);
//   //   console.log("under select Function....");
//   // };

//   const [chats, setChats] = useState([]);
//   const { createNewChat, onSelectChat } = useContext(ChatContext);

//   // <-- MULTI-USER UPDATE: Get the authenticated user
//   const { user } = useContext(AuthContext);

//   const [isCapsuleLoading, setIsCapsuleLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 1. Exit if the user is not logged in
//     if (!user || !user.uid) {
//       setIsCapsuleLoading(false);
//       return;
//     }

//     // 2. Set loading state before starting the fetch
//     setIsCapsuleLoading(true);

//     try {
//       // <-- MULTI-USER UPDATE: Use the new path and order by timestamp
//       const chatsRef = collection(db, "Users", user.uid, "chats");
//       const q = query(chatsRef, orderBy("timestamp", "desc")); // Order by latest chat first

//       const unsubscribe = onSnapshot(
//         q,
//         (snapshot) => {
//           // SUCCESS: Update chats array and turn off loading
//           setChats(snapshot.docs);
//           setIsCapsuleLoading(false);
//         },
//         (error) => {
//           // ERROR: Handle error and turn off loading
//           console.error("Error fetching user chats:", error);
//           setIsCapsuleLoading(false);
//         }
//       );

//       // Cleanup subscription on component unmount or user/dependency change
//       return () => unsubscribe();
//     } catch (error) {
//       // Catch any immediate sync errors (though usually handled by the second callback above)
//       console.error("Sidebar useEffect error:", error);
//       setIsCapsuleLoading(false); // Ensure loading is off on error
//     }
//   }, [user]); // <-- DEPENDENCY UPDATE: Rerun effect when user object changes

//   const handleSelect = (chat) => {
//     onSelectChat(chat.id);
//     navigate(`/chat/${chat.id}`);
//     console.log("under select Function....");
//   };

//   return (
//     <>
//       <style jsx>{`
//         .custom-scrollbar {
//           scrollbar-width: thin;
//           scrollbar-color: #6b7280 transparent;
//         }

//         .custom-scrollbar::-webkit-scrollbar {
//           width: 2px;
//           height: 2px;
//         }

//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }

//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background-color: #6b7280;
//           border-radius: 3px;
//         }

//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background-color: #9ca3af;
//         }
//       `}</style>

//       {/* Mobile backdrop - separate from sidebar */}
//       {isActive && (
//         <div
//           className="md:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-40"
//           onClick={() => setIsActive(false)}
//         />
//       )}

//       <section
//         className={`${
//           isActive
//             ? "fixed left-0 top-0 w-80 h-full z-50 bg-bacground flex flex-col"
//             : "w-0 overflow-hidden"
//         } md:static md:w-60 md:h-full md:flex md:flex-col border-r border-border transition-all duration-300 ease-in-out`}
//       >
//         {/* Logo */}
//         <div className="logo flex items-center justify-between border-b border-b-border p-4 flex-shrink-0">
//           <div className="logo-cap flex items-center">
//             <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
//             <h1 className="text-text text-lg font-bold">
//               <a href="http://" target="_blank" rel="noopener noreferrer">
//                 LexiPro
//               </a>
//             </h1>
//           </div>
//           <div
//             onClick={() => setIsActive(false)}
//             className="p-2 hover:bg-item-hover rounded-full cursor-pointer md:hidden"
//           >
//             <Menu width={25} height={25} color="#fff" />
//           </div>
//         </div>

//         {/* Main content */}
//         <main className="flex-1 flex flex-col p-3 overflow-hidden custom-scrollbar">
//           {/* Search and top actions */}
//           <div className="top-container flex-shrink-0 mb-4">
//             <input
//               type="search"
//               placeholder="Search Chats"
//               className="w-full px-3 py-2 text-text bg-input-bg focus:bg-black border border-transparent focus:border-border outline-none rounded-md transition-colors"
//             />
//             <ul className="text-text mt-4 space-y-1">
//               <li
//                 onClick={() => createNewChat()}
//                 className="sidebaritem text-primary flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors"
//               >
//                 <FiEdit className="text-lg" />
//                 New Chat
//               </li>
//               <li className="sidebaritem flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors">
//                 <RiChatHistoryFill className="text-lg" />
//                 Chats
//               </li>
//               <li className="sidebaritem flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors">
//                 <MdHelpOutline className="text-lg" />
//                 Help
//               </li>
//             </ul>
//           </div>

//           {/* Chat list */}
//           <div className="flex-1 overflow-y-auto custom-scrollbar">
//             {isCapsuleLoading ? (
//               <div className="flex justify-center items-center h-full">
//                 <HashLoader color="#0CAFFF" size={24} />
//               </div>
//             ) : (
//               <ul className="space-y-1">
//                 {chats.map((chat) => (
//                   <li
//                     key={chat.id}
//                     className="p-1.5 hover:bg-item-hover cursor-pointer rounded-md transition-colors group"
//                     onClick={() => handleSelect(chat)}
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1 min-w-0">
//                         <div className="text-sm font-medium text-text truncate">
//                           {chat.data().title || "Untitled Chat"}
//                         </div>
//                       </div>
//                       <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2">
//                         <button className="text-gray-400 hover:text-gray-300 p-1">
//                           <svg
//                             className="w-3 h-3"
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                           >
//                             <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* ProfileBar fixed to bottom */}
//           <div className="flex-shrink-0 mt-2">
//             <ProfileBar />
//           </div>
//         </main>
//       </section>
//     </>
//   );
// }

// export default Sidebar;

import React, { useContext, useEffect, useState } from "react";
import { FiEdit, FiSearch } from "react-icons/fi";
import logo from "../assets/logo1.png";
import { RiChatHistoryFill } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { AuthContext, ChatContext } from "../context/context"; // Correctly importing both contexts
import Menu from "./UI/Menu";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import ProfileBar from "./ProfileBar";

function Sidebar({ isActive, setIsActive, setSearchActive }) {
    const [chats, setChats] = useState([]);
    const { createNewChat, onSelectChat } = useContext(ChatContext);
    
    // <-- MULTI-USER FIX: Get the authenticated user from AuthContext
    const { user } = useContext(AuthContext); 

    const [isCapsuleLoading, setIsCapsuleLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // 1. EXIT CONDITION: If user is not authenticated, stop and clear chats/loading state.
        if (!user || !user.uid) {
            setChats([]);
            setIsCapsuleLoading(false);
            return;
        }

        // 2. Set loading state before starting the fetch
        setIsCapsuleLoading(true);

        try {
            // <-- MULTI-USER FIX: Use the new nested path: Users/UID/chats
            const chatsRef = collection(db, "Users", user.uid, "chats");
            const q = query(chatsRef, orderBy("timestamp", "desc")); // Order by latest chat first

            const unsubscribe = onSnapshot(
                q,
                (snapshot) => {
                    // SUCCESS: Update chats array and turn off loading
                    setChats(snapshot.docs);
                    setIsCapsuleLoading(false);
                },
                (error) => {
                    // ERROR: Handle error and turn off loading
                    console.error("Error fetching user chats:", error);
                    setChats([]);
                    setIsCapsuleLoading(false);
                }
            );

            // Cleanup subscription when the component unmounts or user changes
            return () => unsubscribe();
        } catch (error) {
            // Catch any immediate synchronous errors
            console.error("Sidebar useEffect error:", error);
            setIsCapsuleLoading(false); 
        }
    }, [user]); // <-- DEPENDENCY FIX: Rerun effect when user object changes

    const handleSelect = (chat) => {
        onSelectChat(chat.id);
        navigate(`/chat/${chat.id}`);
        console.log("under select Function....");
    };

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

            {/* Mobile backdrop */}
            {isActive && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-40"
                    onClick={() => setIsActive(false)}
                />
            )}

            <section
                className={`${
                    isActive
                        ? "fixed left-0 top-0 w-80 h-full z-50 bg-bacground flex flex-col"
                        : "w-0 overflow-hidden"
                } md:static md:w-70 md:h-full md:flex md:flex-col border-r border-border transition-all duration-300 ease-in-out`}
            >
                {/* Logo */}
                <div className="logo flex items-center justify-between border-b border-b-border p-4 flex-shrink-0">
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
                        {/* Assuming Menu is a component that toggles the sidebar on mobile */}
                        <Menu width={25} height={25} color="#fff" />
                    </div>
                </div>

                {/* Main content */}
                <main className="flex-1 flex flex-col p-3 overflow-hidden custom-scrollbar">
                    {/* Search and top actions */}
                    <div className="top-container flex-shrink-0 mb-4">
                        {/* <input
                            type="search"
                            placeholder="Search Chats"
                            className="w-full px-3 py-2 text-text bg-input-bg focus:bg-black border border-transparent focus:border-border outline-none rounded-md transition-colors"
                        /> */}
                        <ul className="text-text mt-4 space-y-1">
                            <li
                                onClick={() => createNewChat()}
                                className="sidebaritem text-primary flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors"
                            >
                                <FiEdit className="text-lg" />
                                New Chat
                            </li>
                            <li
                                onClick={() => setSearchActive(true)}
                                className="sidebaritem flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors"
                            >
                                <FiSearch className="text-lg" />
                                Search Chats
                            </li>
                            <li className="sidebaritem flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors">
                                <RiChatHistoryFill className="text-lg" />
                                Chats
                            </li>
                            <li className="sidebaritem flex items-center gap-2 p-2 hover:bg-item-hover cursor-pointer rounded-md transition-colors">
                                <MdHelpOutline className="text-lg" />
                                Help
                            </li>
                        </ul>
                    </div>

                    {/* Chat list */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {isCapsuleLoading ? (
                            // Show loader if still fetching data or if user is still null
                            <div className="flex justify-center items-center h-full">
                                <HashLoader color="#0CAFFF" size={24} />
                            </div>
                        ) : (
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
                                                    {/* Access the title from the Firestore DocumentSnapshot */}
                                                    {chat.data().title || "Untitled Chat"}
                                                </div>
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
                        )}
                    </div>

                    {/* ProfileBar fixed to bottom */}
                    <div className="flex-shrink-0 mt-2">
                        <ProfileBar />
                    </div>
                </main>
            </section>
        </>
    );
}

export default Sidebar;