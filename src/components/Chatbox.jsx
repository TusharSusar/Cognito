import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/context";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import Typewriter from "./UI/Typewriter";
import { HashLoader, ScaleLoader } from "react-spinners";
import { useParams } from "react-router-dom";

function Chatbox() {
  const { messages, setMessages, chatid, loadAiResponse, setLoadAiResponse } =
    useContext(ChatContext);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  const messagesRef = collection(db, "chats", chatid && chatid, "messages");

  // 🔹 Listen for messages in real-time
  useEffect(() => {
    const q = query(messagesRef, orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    setLoading(false);
    setLoadAiResponse(false);
    return () => unsubscribe();
  }, [chatid, cid]);

  return (
    <section
      className={`w-full flex-1 px-4 sm:px-16 md:px-24 lg:px-40 xl:px-96 overflow-y-auto custom-scrollbar ${
        loading && "h-full justify-center items-center"
      }`}
    >
      {loading ? (
        <div className="loading-container">
          <ScaleLoader color="#0CAFFF" />
        </div>
      ) : (
        <>
          {messages?.map((msg) => (
            <div
              key={msg.id}
              className={`text-text my-2 flex justify-end ${
                msg.sender === "ai" && "ai-bubble my-2 flex justify-start"
              }`}
            >
              <span
                className={`px-4 py-2 my-1 ${
                  msg.sender === "user"
                    ? "user-bubble border border-[#00BFFF] font-semibold bg-user-bubble rounded-l-2xl rounded-t-2xl"
                    : "ai-bubble rounded-r-2xl rounded-t-2xl"
                }`}
              >
                {loadAiResponse ? (
                  <HashLoader color="#0CAFFF" size={24} />
                ) : (
                  <>
                    {msg.sender === "ai" ? (
                      <Typewriter text={msg.text} speed={5} onceKey={msg.id} />
                    ) : (
                      msg.text
                    )}
                  </>
                )}
              </span>
            </div>
          ))}
        </>
      )}
      {chatid === "default" && <h1 className="text-text">Default</h1>}
    </section>
  );
}

export default Chatbox;
