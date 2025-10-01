import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider, ChatProvider } from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <ChatProvider>
      <App />
    </ChatProvider>
  </AuthProvider>
  // </StrictMode>
);
