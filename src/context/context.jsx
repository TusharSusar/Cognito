import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { db } from "../components/firebase";
import { useNavigate } from "react-router-dom";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatid, setChatId] = useState("default");
  const[loadAiResponse, setLoadAiResponse] = useState(true)

  //! 🔹 Listen for messages in real-time
  useEffect(() => {
    if (!chatid || chatid === "default") return;

    const messagesRef = collection(db, "chats", chatid, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [chatid]);

  //! Generate AI title based on first message
  const generateChatTitle = useCallback(async (firstMessage) => {
    try {
      const payload = {
        contents: [
          {
            parts: [
              { 
                text: `Generate a short, descriptive title (max 4-5 words) for a chat that starts with this message: "${firstMessage}". Only return the title, nothing else.` 
              }
            ],
          },
        ],
      };

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${
        import.meta.env.VITE_GEMINI_MODEL
      }:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("Title generation failed:", res.status);
        return null;
      }

      const data = await res.json();
      const title = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      
      // Clean up the title (remove quotes if present)
      return title ? title.replace(/['"]/g, '') : null;
    } catch (err) {
      console.error("Error generating chat title:", err);
      return null;
    }
  }, []);

  //! 🔹 Memoized functions to prevent unnecessary re-renders
  const createNewChat = useCallback(async () => {
    const title = "New Chat";
    const chatRef = await addDoc(collection(db, "chats"), {
      title: title,
      timestamp: serverTimestamp(),
    });
    setChatId(chatRef.id);
    setMessages([]);
  }, []);

  //!
  const onSelectChat = useCallback((id) => {
    setChatId(id);
  }, [chatid]);

  //! Getting Ai Response
  const getResponse = useCallback(async () => {
    if (!input.trim() || !chatid || chatid === "default") return;

    const messagesRef = collection(db, "chats", chatid, "messages");

    // 1. Save user message to Firestore
    await addDoc(messagesRef, {
      text: input,
      sender: "user",
      timestamp: serverTimestamp(),
    });

    const currentInput = input;
    setInput("");

    const payload = {
      contents: [
        {
          parts: [{ text: currentInput }],
        },
      ],
    };

    try {
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

      await addDoc(messagesRef, {
        text: aiText,
        sender: "ai",
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error fetching AI response:", err);
    }
  }, [input, chatid]);

  const createNewChatByInput = useCallback(async (userMessage,handleNavigation) => {
    if (!userMessage.trim()) return;

    try {
      // 1. Create new chat document with temporary title
      const chatRef = await addDoc(collection(db, "chats"), {
        title: "New Chat", // Temporary title
        timestamp: serverTimestamp(),
      });

      const newChatId = chatRef.id;
      console.log("Created new chat:", newChatId);

      // 2. Switch to new chat
      setChatId(newChatId);
      handleNavigation(newChatId)

      // 3. Add user message to the new chat
      const messagesRef = collection(db, "chats", newChatId, "messages");
      await addDoc(messagesRef, {
        text: userMessage,
        sender: "user",
        timestamp: serverTimestamp(),
      });

      // 4. Generate AI title based on first message
      const generatedTitle = await generateChatTitle(userMessage);
      if (generatedTitle) {
        const chatDocRef = doc(db, "chats", newChatId);
        await updateDoc(chatDocRef, {
          title: generatedTitle
        });
      }

      // 5. Get AI response
      const payload = {
        contents: [
          {
            parts: [{ text: userMessage }],
          },
        ],
      };

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

      await addDoc(messagesRef, {
        text: aiText,
        sender: "ai",
        timestamp: serverTimestamp(),
      });

    } catch (err) {
      console.error("Error creating new chat:", err);
    }
  }, [generateChatTitle]);

  //! 🔹 Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      input,
      setInput,
      messages,
      setMessages,
      getResponse,
      createNewChat,
      createNewChatByInput,
      onSelectChat,
      chatid,
      loadAiResponse,
      setLoadAiResponse
    }),
    [input, messages, chatid, getResponse, createNewChat, createNewChatByInput, onSelectChat]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};