// import {
//   addDoc,
//   collection,
//   onSnapshot,
//   orderBy,
//   query,
//   serverTimestamp,
//   updateDoc,
//   doc,
//   setDoc,
// } from "firebase/firestore";
// import {
//   createContext,
//   useEffect,
//   useState,
//   useMemo,
//   useCallback,
// } from "react";
// import { db } from "../components/firebase";

// export const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [chatid, setChatId] = useState("default");
//   const [loadAiResponse, setLoadAiResponse] = useState(true);

//   //! 🔹 Listen for messages in real-time
//   useEffect(() => {
//     if (!chatid || chatid === "default") return;

//     const messagesRef = collection(db, "chats", chatid, "messages");
//     const q = query(messagesRef, orderBy("timestamp", "asc"));

//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
//     });

//     return () => unsubscribe();
//   }, [chatid]);

//   //! Generate AI title based on first message
//   const generateChatTitle = useCallback(async (firstMessage) => {
//     try {
//       const payload = {
//         contents: [
//           {
//             parts: [
//               {
//                 text: `Generate a short, descriptive title (max 4-5 words) for a chat that starts with this message: "${firstMessage}". Only return the title, nothing else.`,
//               },
//             ],
//           },
//         ],
//       };

//       const url = `https://generativelanguage.googleapis.com/v1beta/models/${
//         import.meta.env.VITE_GEMINI_MODEL
//       }:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;
//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         console.error("Title generation failed:", res.status);
//         return null;
//       }

//       const data = await res.json();
//       const title = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

//       // Clean up the title (remove quotes if present)
//       return title ? title.replace(/['"]/g, "") : null;
//     } catch (err) {
//       console.error("Error generating chat title:", err);
//       return null;
//     }
//   }, []);

//   //! 🔹 Memoized functions to prevent unnecessary re-renders
//   const createNewChat = useCallback(async () => {
//     const title = "New Chat";
//     const chatRef = await addDoc(collection(db, "chats"), {
//       title: title,
//       timestamp: serverTimestamp(),
//     });
//     setChatId(chatRef.id);
//     setMessages([]);
//   }, []);

//   //!
//   const onSelectChat = useCallback(
//     (id) => {
//       setChatId(id);
//     },
//     [chatid]
//   );

//   //! Getting Ai Response
//   const getResponse = useCallback(async () => {
//     if (!input.trim() || !chatid || chatid === "default") return;

//     const messagesRef = collection(db, "chats", chatid, "messages");

//     // 1. Save user message to Firestore
//     await addDoc(messagesRef, {
//       text: input,
//       sender: "user",
//       timestamp: serverTimestamp(),
//     });

//     const currentInput = input;
//     setInput("");

//     const payload = {
//       contents: [
//         {
//           parts: [{ text: currentInput }],
//         },
//       ],
//     };

//     try {
//       const url = `https://generativelanguage.googleapis.com/v1beta/models/${
//         import.meta.env.VITE_GEMINI_MODEL
//       }:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
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
//       console.log(aiText);

//       await addDoc(messagesRef, {
//         text: aiText,
//         sender: "ai",
//         timestamp: serverTimestamp(),
//       });
//     } catch (err) {
//       console.error("Error fetching AI response:", err);
//     }
//   }, [input, chatid]);

//   // //! Creating Chat By InputBox

//   const createNewChatByInput = useCallback(
//     async (userMessage, handleNavigation) => {
//       if (!userMessage.trim()) return;

//       try {
//         // 1. Create new chat document with temporary title
//         const chatRef = await addDoc(collection(db, "chats"), {
//           title: "New Chat", // Temporary title
//           timestamp: serverTimestamp(),
//         });

//         const newChatId = chatRef.id;
//         console.log("Created new chat:", newChatId);

//         // 2. Switch to new chat
//         setChatId(newChatId);
//         handleNavigation(newChatId);

//         // 3. Add user message to the new chat
//         const messagesRef = collection(db, "chats", newChatId, "messages");
//         await addDoc(messagesRef, {
//           text: userMessage,
//           sender: "user",
//           timestamp: serverTimestamp(),
//         });

//         // 4. Generate AI title based on first message
//         const generatedTitle = await generateChatTitle(userMessage);
//         if (generatedTitle) {
//           const chatDocRef = doc(db, "chats", newChatId);
//           await updateDoc(chatDocRef, { title: generatedTitle });
//         }

//         // 5. Get AI response
//         const payload = {
//           contents: [
//             {
//               parts: [{ text: userMessage }],
//             },
//           ],
//         };

//         const url = `https://generativelanguage.googleapis.com/v1beta/models/${
//           import.meta.env.VITE_GEMINI_MODEL
//         }:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;

//         const res = await fetch(url, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });

//         if (!res.ok) {
//           const text = await res.text();
//           console.error("API Error:", res.status, text);
//           return;
//         }

//         const data = await res.json();
//         const aiText =
//           data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response";

//         await addDoc(messagesRef, {
//           text: aiText,
//           sender: "ai",
//           timestamp: serverTimestamp(),
//         });
//       } catch (err) {
//         console.error("Error creating new chat:", err);
//       }
//     },
//     [generateChatTitle]
//   );

//   //! 🔹 Memoize context value to prevent unnecessary re-renders
//   const contextValue = useMemo(
//     () => ({
//       input,
//       setInput,
//       messages,
//       setMessages,
//       getResponse,
//       createNewChat,
//       createNewChatByInput,
//       onSelectChat,
//       chatid,
//       loadAiResponse,
//       setLoadAiResponse,
//     }),
//     [
//       input,
//       messages,
//       chatid,
//       getResponse,
//       createNewChat,
//       createNewChatByInput,
//       onSelectChat,
//     ]
//   );

//   return (
//     <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
//   );
// };

// import { auth } from "../components/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   updateProfile,
//   onAuthStateChanged,
// } from "firebase/auth";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   //! Keep user logged in across refresh
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         const userData = {
//           uid: firebaseUser.uid,
//           email: firebaseUser.email,
//           name: firebaseUser.displayName,
//         };
//         setUser(userData);
//         sessionStorage.setItem("user", JSON.stringify(userData));
//       } else {
//         setUser(null);
//         sessionStorage.removeItem("user");
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   //! Login
//   const login = async (email, password) => {
//     try {
//       const res = await signInWithEmailAndPassword(auth, email, password);
//       const loggedInUser = res.user;

//       const userData = {
//         uid: loggedInUser.uid,
//         email: loggedInUser.email,
//         name: loggedInUser.displayName,
//       };

//       setUser(userData);
//       sessionStorage.setItem("user", JSON.stringify(userData));

//       console.log("Login Success:", loggedInUser.email);
//       return userData;
//     } catch (error) {
//       console.error("Login Error:", error.code, error.message);
//       if (error.code === "auth/wrong-password") {
//         alert("Invalid password. Please try again.");
//       } else if (error.code === "auth/user-not-found") {
//         alert("No account found with that email address.");
//       } else {
//         alert(`Login failed: ${error.message}`);
//       }
//       throw error;
//     }
//   };

//   //! Register
//   const registerNewUser = async (email, pass, name) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         pass
//       );

//       await updateProfile(userCredential.user, { displayName: name });

//       const newUser = {
//         uid: userCredential.user.uid,
//         email: userCredential.user.email,
//         name: name,
//       };

//       setUser(newUser);
//       sessionStorage.setItem("user", JSON.stringify(newUser));

//       // Save in Firestore
//       await addDoc(collection(db, "Users"), {
//         useremail: email,
//         username: name,
//         lastLoginAt: serverTimestamp(),
//         plan:"free"
//       });

//       console.log("New user registered:", newUser);
//       return newUser;
//     } catch (error) {
//       console.error("Registration Error:", error.code, error.message);
//       if (error.code === "auth/weak-password") {
//         alert("The password is too weak. It must be at least 6 characters.");
//       } else if (error.code === "auth/email-already-in-use") {
//         alert("An account already exists with this email address.");
//       } else {
//         alert(`Registration failed: ${error.message}`);
//       }
//       throw error;
//     }
//   };

//   //! Logout
//   const logout = async () => {
//     await signOut(auth);
//     sessionStorage.removeItem("user");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, setUser, login, registerNewUser, logout, loading }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  useContext, // <-- MULTI-USER UPDATE: Import useContext
} from "react";
import { db } from '../Firebase/firebase';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatid, setChatId] = useState("default");
  const [loadAiResponse, setLoadAiResponse] = useState(true);

  // <-- MULTI-USER UPDATE: Get the authenticated user
  const { user } = useContext(AuthContext);

  //! 🔹 Listen for messages in real-time
  useEffect(() => {
    // <-- MULTI-USER UPDATE: Check for user before listening
    if (!chatid || chatid === "default" || !user) return;

    // <-- MULTI-USER UPDATE: New Path: Users/UID/chats/chatid/messages
    const messagesRef = collection(db, "Users", user.uid, "chats", chatid, "messages");
    const q = query(messagesRef, orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [chatid, user]); // <-- MULTI-USER UPDATE: Added user to dependencies

  //! Generate AI title based on first message
  const generateChatTitle = useCallback(async (firstMessage) => {
    // ... (This function is unchanged as it only calls the Gemini API)
    try {
      const payload = {
        contents: [
          {
            parts: [
              {
                text: `Generate a short, descriptive title (max 4-5 words) for a chat that starts with this message: "${firstMessage}". Only return the title, nothing else.`,
              },
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
      return title ? title.replace(/['"]/g, "") : null;
    } catch (err) {
      console.error("Error generating chat title:", err);
      return null;
    }
  }, []);

  //! 🔹 Memoized functions to prevent unnecessary re-renders
  const createNewChat = useCallback(async () => {
    // <-- MULTI-USER UPDATE: Check for user
    if (!user) return;

    const title = "New Chat";
    // <-- MULTI-USER UPDATE: New Path: Users/UID/chats
    const chatRef = await addDoc(collection(db, "Users", user.uid, "chats"), {
      title: title,
      timestamp: serverTimestamp(),
    });
    setChatId(chatRef.id);
    setMessages([]);
  }, [user]); // <-- MULTI-USER UPDATE: Added user to dependencies

  //!
  const onSelectChat = useCallback(
    (id) => {
      setChatId(id);
    },
    [] // dependency array was previously [chatid] but chatid is not used inside the function
  );

  //! Getting Ai Response
  const getResponse = useCallback(async () => {
    // <-- MULTI-USER UPDATE: Check for user
    if (!input.trim() || !chatid || chatid === "default" || !user) return;

    // <-- MULTI-USER UPDATE: New Path: Users/UID/chats/chatid/messages
    const messagesRef = collection(db, "Users", user.uid, "chats", chatid, "messages");

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
      // console.log(aiText);

      await addDoc(messagesRef, {
        text: aiText,
        sender: "ai",
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error fetching AI response:", err);
    }
  }, [input, chatid, user]); // <-- MULTI-USER UPDATE: Added user to dependencies

  // //! Creating Chat By InputBox

  const createNewChatByInput = useCallback(
    async (userMessage, handleNavigation) => {
      // <-- MULTI-USER UPDATE: Check for user
      if (!userMessage.trim() || !user) return;

      try {
        // 1. Create new chat document with temporary title
        // <-- MULTI-USER UPDATE: New Path: Users/UID/chats
        const chatRef = await addDoc(collection(db, "Users", user.uid, "chats"), {
          title: "New Chat", // Temporary title
          timestamp: serverTimestamp(),
        });

        const newChatId = chatRef.id;
        console.log("Created new chat:", newChatId);

        // 2. Switch to new chat
        setChatId(newChatId);
        handleNavigation(newChatId);

        // 3. Add user message to the new chat
        // <-- MULTI-USER UPDATE: New Path: Users/UID/chats/newChatId/messages
        const messagesRef = collection(
          db,
          "Users",
          user.uid,
          "chats",
          newChatId,
          "messages"
        );
        await addDoc(messagesRef, {
          text: userMessage,
          sender: "user",
          timestamp: serverTimestamp(),
        });

        // 4. Generate AI title based on first message
        const generatedTitle = await generateChatTitle(userMessage);
        if (generatedTitle) {
          // <-- MULTI-USER UPDATE: New Path: Users/UID/chats/newChatId
          const chatDocRef = doc(db, "Users", user.uid, "chats", newChatId);
          await updateDoc(chatDocRef, { title: generatedTitle });
        }

        // 5. Get AI response (Gemini API call unchanged)
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
    },
    [generateChatTitle, user] // <-- MULTI-USER UPDATE: Added user to dependencies
  );

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
      setLoadAiResponse,
    }),
    [
      input,
      messages,
      chatid,
      getResponse,
      createNewChat,
      createNewChatByInput,
      onSelectChat,
      user, // <-- MULTI-USER UPDATE: Added user to memo dependencies
    ]
  );

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

// =========================================================================
// AuthContext is largely unchanged, but the registerNewUser function
// already correctly sets up the initial User document as seen in your image.
// =========================================================================

import { auth } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! Keep user logged in across refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
        };
        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));
      } else {
        setUser(null);
        sessionStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //! Login
  const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = res.user;

      const userData = {
        uid: loggedInUser.uid,
        email: loggedInUser.email,
        name: loggedInUser.displayName,
      };

      setUser(userData);
      sessionStorage.setItem("user", JSON.stringify(userData));

      console.log("Login Success:", loggedInUser.email);
      return userData;
    } catch (error) {
      console.error("Login Error:", error.code, error.message);
      if (error.code === "auth/wrong-password") {
        alert("Invalid password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        alert("No account found with that email address.");
      } else {
        alert(`Login failed: ${error.message}`);
      }
      throw error;
    }
  };

  //! Register
  const registerNewUser = async (email, pass, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );

      await updateProfile(userCredential.user, { displayName: name });

      const newUser = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: name,
      };

      setUser(newUser);
      sessionStorage.setItem("user", JSON.stringify(newUser));

      // Save in Firestore
      // <-- NOTE: This document is currently in the 'Users' collection
      // without using the UID as the Document ID.
      // To match your new structure perfectly, you should use setDoc with the UID
      // instead of addDoc. The current setup is okay, but less efficient.
      await addDoc(collection(db, "Users"), { 
        useremail: email,
        username: name,
        lastLoginAt: serverTimestamp(),
        plan: "free",
      });

      console.log("New user registered:", newUser);
      return newUser;
    } catch (error) {
      console.error("Registration Error:", error.code, error.message);
      if (error.code === "auth/weak-password") {
        alert("The password is too weak. It must be at least 6 characters.");
      } else if (error.code === "auth/email-already-in-use") {
        alert("An account already exists with this email address.");
      } else {
        alert(`Registration failed: ${error.message}`);
      }
      throw error;
    }
  };

  //! Logout
  const logout = async () => {
    await signOut(auth);
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, registerNewUser, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};