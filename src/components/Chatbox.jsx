// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext, ChatContext } from "../context/context";
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { db } from "./firebase";
// import Typewriter from "./UI/Typewriter";
// import { HashLoader, PacmanLoader, ScaleLoader } from "react-spinners";
// import { useParams } from "react-router-dom";

// function Chatbox() {
//   const { messages, setMessages, chatid, loadAiResponse, setLoadAiResponse } =
//     useContext(ChatContext);

//   const [loading, setLoading] = useState(true);
//   const { cid } = useParams();

//   useEffect(() => {
//     const chatDocId = cid || chatid;
//     if (!chatDocId) return; // no chat selected yet

//     const messagesRef = collection(db, "chats", chatDocId, "messages");
//     const q = query(messagesRef, orderBy("timestamp", "asc"));

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//       setLoading(false); // ✅ only stop loading after data arrives
//       setLoadAiResponse(false);
//     });

//     return () => unsubscribe();
//   }, [chatid, cid]);

//   return (
//     <section
//       className={`w-full flex-1 px-4 sm:px-16 md:px-24 lg:px-40 xl:px-96 overflow-y-auto custom-scrollbar`}
//     >
//       {loading ? (
//         // 🔹 Initial load spinner (before snapshot received)
//         <div className="h-full flex justify-center items-center">
//           <HashLoader color="#0CAFFF" size={24} />
//           {/* <PacmanLoader color="#0CAFFF" /> */}
//         </div>
//       ) : (
//         <>
//           {messages?.map((msg) => (
//             <div
//               key={msg.id}
//               className={`text-text my-2 flex justify-end ${
//                 msg.sender === "ai" && "ai-bubble my-2 flex justify-start"
//               }`}
//             >
//               <span
//                 className={`px-4 py-2 my-1 ${
//                   msg.sender === "user"
//                     ? "user-bubble border border-[#00BFFF] font-semibold bg-user-bubble rounded-l-2xl rounded-t-2xl"
//                     : "ai-bubble rounded-r-2xl rounded-t-2xl"
//                 }`}
//               >
//                 {msg.sender === "ai" && loadAiResponse ? (
//                   <HashLoader color="#0CAFFF" size={24} />
//                 ) : msg.sender === "ai" ? (
//                   // 🔹 Use Typewriter instead of ReactMarkdown directly
//                   <Typewriter text={msg.text} speed={2} onceKey={msg.id} />
//                 ) : (
//                   msg.text
//                 )}
//               </span>
//               {/* <span
//                 className={`px-4 py-2 my-1 ${
//                   msg.sender === "user"
//                     ? "user-bubble border border-[#00BFFF] font-semibold bg-user-bubble rounded-l-2xl rounded-t-2xl"
//                     : "ai-bubble rounded-r-2xl rounded-t-2xl"
//                 }`}
//               >
//                 {msg.sender === "ai" && loadAiResponse ? (
//                   <HashLoader color="#0CAFFF" size={24} />
//                 ) : msg.sender === "ai" ? (
//                   <ReactMarkdown
//                     children={msg.text}
//                     remarkPlugins={[remarkGfm]}
//                     components={{
//                       h1: ({ node, ...props }) => (
//                         <div>
//                           <h1
//                             className="text-3xl font-bold mt-4 mb-2 border-b border-gray-600 pb-1"
//                             {...props}
//                           />
//                           <hr className="my-3 border-gray-700" />
//                         </div>
//                       ),
//                       h2: ({ node, ...props }) => (
//                         <div>
//                           <h2
//                             className="text-xl font-semibold mt-3 mb-2 text-blue-400"
//                             {...props}
//                           />
//                           <hr className="my-2 border-gray-700" />
//                         </div>
//                       ),
//                       p: ({ node, ...props }) => (
//                         <p
//                           className="my-3 leading-relaxed text-gray-200"
//                           {...props}
//                         />
//                       ),
//                       ul: ({ node, ...props }) => (
//                         <div className="my-5">
//                           <ul
//                             className="list-disc list-inside ml-5 space-y-2 text-gray-200"
//                             {...props}
//                           />
//                           <hr className="my-3 border-gray-700" />
//                         </div>
//                       ),
//                       li: ({ node, ...props }) => (
//                         <li className="leading-snug my-4 ml-4" {...props} />
//                       ),
//                       hr: () => <hr className="my-4 border-gray-600" />,
//                       code: ({ node, inline, ...props }) =>
//                         inline ? (
//                           <code
//                             className="bg-gray-800 text-yellow-300 px-1 rounded"
//                             {...props}
//                           />
//                         ) : (
//                           <pre className="bg-gray-900 text-white p-3 rounded-lg overflow-x-auto">
//                             <code {...props} />
//                           </pre>
//                         ),
//                     }}
//                   />
//                 ) : (
//                   msg.text
//                 )}
//               </span> */}
//             </div>
//           ))}
//         </>
//       )}

//       {chatid === "default" && messages.length === 0 && (
//         <div className="default h-full flex items-center justify-center">
//           <h1
//             className="block text-3xl font-semibold text-text select-none md:text-nowrap"
//             style={{
//               animation: "fadeInScale 0.8s ease-out forwards",
//             }}
//           >
//             <span className="text-primary mx-2">Hello User</span> What's vibe
//             Today?
//           </h1>

//           <style>
//             {`
//         @keyframes fadeInScale {
//           0% { opacity: 0; transform: translateY(20px) scale(0.95); }
//           100% { opacity: 1; transform: translateY(0) scale(1); }
//         }
//       `}
//           </style>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Chatbox;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext, ChatContext } from "../context/context"; // Import AuthContext
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import Typewriter from "./UI/Typewriter";
import { HashLoader, ScaleLoader } from "react-spinners";
import { useParams } from "react-router-dom";

function Chatbox() {
  const { messages, setMessages, chatid, loadAiResponse, setLoadAiResponse } =
    useContext(ChatContext);

  // <-- MULTI-USER FIX: Get the authenticated user
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const chatDocId = cid || chatid;

    // 1. EXIT CONDITION: Must have a chat ID AND a user
    if (!chatDocId || !user || !user.uid) {
      setMessages([]); // Clear old messages if user logs out or chat is null
      setLoading(false);
      return;
    }

    // Set loading state true when chatDocId or user changes
    setLoading(true);

    // 2. MULTI-USER FIX: Use the new path: Users/UID/chats/chatid/messages
    const messagesRef = collection(
      db,
      "Users",
      user.uid,
      "chats",
      chatDocId,
      "messages"
    );
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setLoading(false); // ✅ stop initial loading after data arrives
        setLoadAiResponse(false); // Likely means the *current* AI stream is done
      },
      (error) => {
        console.error("Error loading chat messages:", error);
        setMessages([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [chatid, cid, user]); // <-- DEPENDENCY FIX: Rerun effect when user changes

  // const [authorizeduser, setAuthorizedUser] = useState(null);

  // useEffect(() => {
  //   const storedUser = sessionStorage.getItem("user");
  //   if (storedUser) {
  //     setAuthorizedUser(JSON.parse(storedUser));
  //   }
  // }, []);

  const nameInitial = user?.name?.[0]?.toUpperCase() || "";

  // const authorizeduser = JSON.parse(sessionStorage.getItem("user"));
  // const name = authorizeduser?.name;
  // const nameInitial = name.charAt(0).toUpperCase();

  return (
    <section
      className={`w-full flex-1 px-4 sm:px-16 md:px-24 lg:px-40 xl:px-96 overflow-y-auto custom-scrollbar`}
    >
      {loading ? (
        // 🔹 Initial load spinner (before snapshot received)
        <div className="h-full flex justify-center items-center">
          <ScaleLoader color="#0CAFFF" size={24} />
          {/* <PacmanLoader color="#0CAFFF" /> */}
        </div>
      ) : (
        <>
          {messages?.map((msg) => (
            <div
              key={msg.id}
              className={`text-text text-sm md:text-md flex items-end justify-end ${
                msg.sender === "ai" &&
                "ai-bubble my-1 md:my-2 flex justify-start"
              }`}
            >
              <span
                className={`py-2 my-1 ${
                  msg.sender === "user"
                    ? "user-bubble px-4 max-w-2xl wrap-break-word border border-[#00BFFF] font-semibold bg-user-bubble rounded-l-2xl rounded-t-2xl"
                    : "ai-bubble rounded-r-2xl rounded-t-2xl"
                }`}
              >
                {/* {msg.sender === "ai" &&
                loadAiResponse &&
                messages[messages.length - 1].id === msg.id ? (
                  <HashLoader color="#0CAFFF" size={24} />
                ) : msg.sender === "ai" ? (
                  <Typewriter text={msg.text} speed={2} onceKey={msg.id} />
                ) : (
                  msg.text
                )} */}
                {msg.sender === "user" ? (
                  msg.text
                ) : (
                  <>
                    {loadAiResponse && index === messages.length - 1 ? (
                      <HashLoader color="#0CAFFF" size={24} />
                    ) : (
                      <Typewriter text={msg.text} speed={2} onceKey={msg.id} />
                    )}
                  </>
                )}
              </span>
              <span
                className={`${
                  msg.sender === "user" ? "visible" : "hidden"
                } px-2.5 py-1 m-2 text-black bg-amber-200 rounded-full`}
              >
                {nameInitial}
              </span>
            </div>
          ))}
        </>
      )}

      {/* Default "Hello User" screen */}
      {/* {chatid === "default" && messages.length === 0 && (
                <div className="default h-full flex items-center justify-center">
                    <h1
                        className="block text-3xl font-semibold text-text select-none md:text-nowrap"
                        style={{
                            animation: "fadeInScale 0.8s ease-out forwards",
                        }}
                    >
                        <span className="text-primary mx-2">Hello {user?.name || "User"}</span> What's vibe
                        Today?
                    </h1>

                    <style>
                        {`
                        @keyframes fadeInScale {
                          0% { opacity: 0; transform: translateY(20px) scale(0.95); }
                          100% { opacity: 1; transform: translateY(0) scale(1); }
                        }
                    `}
                    </style>
                </div>
            )} */}
      {messages.length === 0 && !loading && (
        <div className="default h-full flex items-center justify-center">
          <div
            className="block text-3xl font-semibold text-text select-none  md:flex gap-1 md:text-nowrap"
            style={{
              animation: "fadeInScale 0.8s ease-out forwards",
            }}
          >
            {/* The welcome message content */}
            <span className="text-primary mx-2">
              Hello {user?.name || "User"}
            </span>
            <h1>What's vibe Today?</h1>
          </div>

          <style>
            {`
            @keyframes fadeInScale {
              0% { opacity: 0; transform: translateY(20px) scale(0.95); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
        `}
          </style>
        </div>
      )}
    </section>
  );
}

export default Chatbox;
