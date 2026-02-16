// import React, { useContext, useState } from "react";
// import { FaMicrophoneLines, FaPlus } from "react-icons/fa6";
// import { FiPaperclip } from "react-icons/fi";
// import { IoSend } from "react-icons/io5";
// import { AuthContext, ChatContext } from "../context/context";
// import { useNavigate } from "react-router-dom";

// function InputBar() {
//   const {
//     input,
//     setInput,
//     getResponse,
//     chatid,
//     createNewChatByInput,
//   } = useContext(ChatContext);

//   const {user} = useContext(AuthContext)

//   const navigate = useNavigate()

//   const handleNavigation = (newChatId) => {
//     navigate(`/chat/${newChatId}`)
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!input.trim()) return;

//     if (chatid === "default") {
//       // Create new chat with the input message
//       await createNewChatByInput(input,handleNavigation,user);
//       // handleNavigation()
//       setInput("");
//     } else {
//       // Use existing chat - getResponse handles everything
//       await getResponse();
//       console.log("Submitted :", input);
//     }
//   };

//   return (
//     <section className="w-full sm:my-4 mt-4 mb-0 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bar w-full sm:w-1/3 min-w-[90%] lg:min-w-2xl px-2.5 py-2 gap-2 flex flex-col border border-secondary rounded-xl"
//       >
//         <div className="input flex-1">
//           <input
//             type="text"
//             placeholder="Message Cognito....."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             className="p-2 w-full text-text outline-0 border-0 wrap-break-word"
//           />
//         </div>
//         <div className="toolbar flex items-center justify-between">
//           <div className="upload p-1.5 flex gap-3">
//             <span className="p-2 rounded-full hover:bg-item-hover cursor-pointer">
//               <FaPlus size={18} color="#f1f1f1" />
//               {/* <FiPaperclip size={18} color="#f1f1f1" /> */}
//             </span>
//             <span className="p-2 rounded-full hover:bg-item-hover cursor-pointer">
//               <FaMicrophoneLines size={18} color="#f1f1f1" />
//             </span>
//           </div>
//           <button
//             type="submit"
//             disabled={!input.trim()}
//             className="p-2.5 cursor-pointer bg-primary rounded-full"
//           >
//             <span>
//               <IoSend />
//             </span>
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default InputBar;

import React, { useContext, useState, useRef, useCallback, useEffect } from "react";
import { FaMicrophoneLines, FaPlus } from "react-icons/fa6";
import { FiPaperclip } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { Image, Lightbulb, Search, Zap, MoreHorizontal } from "lucide-react";
import { AuthContext, ChatContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { DropdownMenu } from "./InputDropdown";

// Custom Hook - Click Outside Detection
const useClickOutside = (onClickOutside) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return ref;
};

// Main Input Bar Component
function InputBar() {
  const {
    input,
    setInput,
    getResponse,
    chatid,
    createNewChatByInput,
  } = useContext(ChatContext);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsDropdownOpen(false));

  const handleNavigation = useCallback((newChatId) => {
    navigate(`/chat/${newChatId}`);
  }, [navigate]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!input.trim()) return;

      try {
        if (chatid === "default") {
          // Create new chat with the input message
          await createNewChatByInput(input, handleNavigation, user);
          setInput("");
        } else {
          // Use existing chat - getResponse handles everything
          await getResponse();
          console.log("Submitted:", input);
        }
      } catch (error) {
        console.error("Error submitting message:", error);
      }
    },
    [input, chatid, createNewChatByInput, getResponse, handleNavigation, user]
  );

  const handleDropdownSelect = useCallback((itemLabel) => {
    console.log("Selected:", itemLabel);
    // Add your logic here for what happens when menu items are clicked
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
      if (e.key === "Enter" && e.ctrlKey) {
        handleSubmit(e);
      }
    },
    [handleSubmit]
  );

  return (
    <section className="w-full sm:my-4 mt-4 mb-0 flex items-center justify-center px-2 sm:px-0">
      <form
        onSubmit={handleSubmit}
        className="bar w-full sm:w-1/3 min-w-[90%] lg:min-w-2xl px-2.5 py-2 gap-2 flex flex-col border border-secondary rounded-xl bg-[var(--color-bacground)]"
      >
        {/* Input Area */}
        <div className="input flex-1">
          <input
            type="text"
            placeholder="Message Cognito....."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="p-2 w-full text-[var(--color-text)] bg-[var(--color-bacground)] outline-0 border-0 wrap-break-word placeholder-[var(--color-text)]/50"
          />
        </div>

        {/* Toolbar */}
        <div className="toolbar flex items-center justify-between relative" ref={dropdownRef}>
          {/* Left Actions */}
          <div className="upload p-1.5 flex gap-3">
            {/* Dropdown Menu Button */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsDropdownOpen(!isDropdownOpen);
                }
              }}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              className="p-2 rounded-full hover:bg-[var(--color-item-hover)] cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              title="Open menu"
            >
              <FaPlus size={18} color="#f1f1f1" />
            </button>

            {/* Microphone Button */}
            <button
              type="button"
              className="p-2 rounded-full hover:bg-[var(--color-item-hover)] cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              title="Voice input"
            >
              <FaMicrophoneLines size={18} color="#f1f1f1" />
            </button>
          </div>

          {/* Dropdown Menu */}
          <DropdownMenu
            isOpen={isDropdownOpen}
            onClose={() => setIsDropdownOpen(false)}
            onSelectItem={handleDropdownSelect}
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Send message"
            className="p-2.5 cursor-pointer bg-[var(--color-primary)] text-white rounded-full hover:bg-opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-bacground)]"
          >
            <IoSend size={18} />
          </button>
        </div>
      </form>
    </section>
  );
}

export default InputBar;