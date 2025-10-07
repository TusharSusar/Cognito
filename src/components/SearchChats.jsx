import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { AuthContext } from "../context/context";
import { db } from "../Firebase/firebase";

const SearchChats = ({ setSearchActive }) => {
  const [allChatsTitles, setAllChatsTitles] = useState([]);
  const [searchInput, setSeachInput] = useState("");
  const { user } = useContext(AuthContext);
//   const navigate  = useNavigate()

  useEffect(() => {
    try {
      const chatsRef = collection(db, "Users", user.uid, "chats");
      const q = query(chatsRef, orderBy("timestamp", "desc"));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const chats = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setAllChatsTitles(chats);
          console.log(typeof chats);
        },
        (error) => {
          console.error("Error fetching user chats:", error);
        }
      );

      return () => unsubscribe();
    } catch (error) {
      console.error("Search Chat useEffect error:", error);
    }
  }, [user.uid]);

  const filteredChats = allChatsTitles.filter((chat) =>
    chat.title?.toLowerCase().includes(searchInput.toLowerCase())
  );

//   const handldeNavigate = (id) => {
//     navigate(`{/chat/${id}}`)
//   }

  return (
    <section className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-bacground/85">
      <span
        className="absolute top-0 right-0 p-1 m-4 rounded-full cursor-pointer hover:bg-item-hover"
        onClick={() => setSearchActive()}
      >
        <IoIosCloseCircle size={35} color="#0CAFFF" />
      </span>
      <div className="modal lg:w-1/2 h-1/2 px-4 py-6 rounded-lg border border-border bg-bacground shadow-[0px_8px_50px_-4px_rgba(8,_112,_184,_0.7)] relative flex flex-col">
        <input
          type="search"
          placeholder="Search Chats"
          onChange={(e) => setSeachInput(e.target.value)}
          className="w-full px-3 py-4 text-text bg-sec-bg border border-transparent focus:bg-bacground focus:border-primary outline-none rounded-md transition-colors"
        />

        {/* 🔹 Fixed-height scroll area */}
        <div className="flex-1 w-full overflow-y-auto custom-scrollbar mt-4">
          <ul className="space-y-4">
            {filteredChats.map((chat) => (
              <li
                key={chat.id}
                onClick={()=>handldeNavigate(chat.id)}
                className="py-4 px-4 bg-item-hover border border-border cursor-pointer rounded-md transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-text truncate">
                      {chat.title || "Untitled Chat"}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SearchChats;
