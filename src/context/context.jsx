// import {
//   addDoc,
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   serverTimestamp,
// } from "firebase/firestore";
// import { createContext, useEffect, useState } from "react";
// import { db } from "../components/firebase";

// export const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]); // all chat messages
//   const[chatid,setChatId] = useState()

//   const messagesRef = collection(db, "chats", chatid, "messages");

//   // 🔹 Listen for messages in real-time
//   useEffect(() => {
//     const q = query(messagesRef, orderBy("timestamp", "asc"));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     });
//     return () => unsubscribe();
//   }, [chatid]);

//   // 🔹 Create a new chat
//   const createNewChat = async () => {
//     const chatRef = await addDoc(collection(db, "chats"), {
//       title: "New Chat",
//       timestamp: serverTimestamp(),
//     });
//     setChatId(chatRef.id); // switch to new chat
//     setMessages([]); // clear messages
//   };

//   const onSelectChat = (id) => {
//     setChatId(id)
//   }

//   const getResponse = async () => {
//     if (!input.trim()) return;

//     // 1. Save user message to Firestore
//     await addDoc(messagesRef, {
//       text: input,
//       sender: "user",
//       timestamp: serverTimestamp(),
//     });

//     const payload = {
//       contents: [
//         {
//           parts: [{ text: input }],
//         },
//       ],
//     };

//     try {
//       // 2. Call Gemini API
//       const url = `https://generativelanguage.googleapis.com/v1beta/models/${
//         import.meta.env.VITE_GEMINI_MODEL
//       }:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

//       const res = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         const text = await res.text();
//         console.error("API Error:", res.status, text);
//         return;
//       }

//       const data = await res.json();
//       const aiText =
//         data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response";

//       // 3. Save AI response to Firestore
//       await addDoc(messagesRef, {
//         text: aiText,
//         sender: "ai",
//         timestamp: serverTimestamp(),
//       });

//       setInput(""); // clear input
//     } catch (err) {
//       console.error("Error fetching AI response:", err);
//     }
//   };

//   return (
//     <ChatContext.Provider
//       value={{
//         input,
//         setInput,
//         messages,
//         setMessages,
//         getResponse,
//         createNewChat,
//         onSelectChat
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../components/firebase";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // all chat messages
  const [chatid, setChatId] = useState('default');
  // const [currentChat, setCurrentChat] = useState("default");

  console.log(chatid);
  
  // 🔹 Listen for messages in real-time
  useEffect(() => {
    if (!chatid) return; // wait until chatid is set

    const messagesRef = collection(db, "chats", chatid, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [chatid]);

  console.log(messages);
  

  // 🔹 Create a new chat
  const createNewChat = async () => {
    const title = "Chat " + new Date().toLocaleString();
    const chatRef = await addDoc(collection(db, "chats"), {
      title: title,
      timestamp: serverTimestamp(),
    });
    setChatId(chatRef.id); // switch to new chat
    setMessages([]); // clear messages
  };

  const onSelectChat = (id) => {
    setChatId(id);
  };

  const getResponse = async () => {
    if (!input.trim() || !chatid) return;

    const messagesRef = collection(db, "chats", chatid, "messages");

    // 1. Save user message to Firestore
    await addDoc(messagesRef, {
      text: input,
      sender: "user",
      timestamp: serverTimestamp(),
    });

    const payload = {
      contents: [
        {
          parts: [{ text: input }],
        },
      ],
    };

    try {
      // 2. Call Gemini API
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${
        import.meta.env.VITE_GEMINI_MODEL
      }:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("API Error:", res.status, text);
        return;
      }

      const data = await res.json();
      const aiText =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response";

      // 3. Save AI response to Firestore
      await addDoc(messagesRef, {
        text: aiText,
        sender: "ai",
        timestamp: serverTimestamp(),
      });

      setInput(""); // clear input
    } catch (err) {
      console.error("Error fetching AI response:", err);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        input,
        setInput,
        messages,
        setMessages,
        getResponse,
        createNewChat,
        onSelectChat,
        chatid
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
