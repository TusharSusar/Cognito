import React, { useContext, useEffect } from "react";
import { ChatContext } from "../context/context";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import Typewriter from "./UI/Typewriter";

function Chatbox() {
  const { messages,setMessages,chatid } = useContext(ChatContext);

  // const messagesRef = collection(db, "chats", chatid && chatid, "messages");

  // 🔹 Listen for messages in real-time
  // useEffect(() => {
  //   const q = query(messagesRef, orderBy("timestamp", "asc"));
  //   const unsubscribe = onSnapshot(q, (snapshot) => {
  //     setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //   });
  //   return () => unsubscribe();
  // }, [chatid]);

  // const getChatMsg = () => {
  //   const unsubscribe = onSnapshot(collection(db,"chats"),(chat)=> {
  //     console.log(chat.docs);
  //   })
  //   return ()=> unsubscribe()
  // }
  // getChatMsg()

  return (
    <section className="w-full flex-1 px-4 sm:px-16 md:px-24 lg:px-40 xl:px-80">
      {messages?.map((msg) => (
        <div
          key={msg.id}
          className={`text-text my-2 flex justify-end ${msg.sender === "ai" && "ai-bubble my-2 flex justify-start"}`}
        >
          <span className={`px-4 py-2 my-1 ${msg.sender === "user" ? "user-bubble border border-[#00BFFF] font-semibold bg-user-bubble rounded-l-2xl rounded-t-2xl" : "ai-bubble rounded-r-2xl rounded-t-2xl"}`}>{msg.sender=== 'ai' ? <Typewriter text={msg.text} speed={25} onceKey={msg.id} /> : msg.text}</span>
        </div>
      ))}
      {
        chatid==='default' && (
          <h1 className="text-text">Default</h1>
        )
      }
    </section>
  );
}

export default Chatbox;
