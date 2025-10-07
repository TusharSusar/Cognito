import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/context";
import { auth } from "../Firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function Signin() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedUser = login(email, pass);
    if (loggedUser !== null) navigate("/chat");
  };

  return (
    <div className="relative flex items-center justify-center sm:flex-col md:flex-row min-h-screen bg-[var(--color-bacground)] text-[var(--color-text)]">
      <button
        type="button"
        className="absolute top-0 left-0 m-2 p-1 md:m-4 md:p-2 rounded-full cursor-pointer hover:bg-input-bg"
        onClick={()=> navigate("/")}
      >
        <IoArrowBackCircleOutline size={25} color="#0CAFFF" />
      </button>
      {/* 2. Left Login Panel - Responsive width and dark theme */}
      {/* sm:p-6 for mobile padding, md:w-1/2 for desktop width */}
      <div className="w-full md:w-1/2 max-w-md px-10 sm:px-6 flex flex-col justify-center py-12 md:px-10 md:py-0 md:border-r border-[var(--color-border)]">
        {/* Brand Logo - Updated text color */}
        {/* Original: text-gray-900 | New: text-[var(--color-primary)] */}
        <div className="flex items-center space-x-2 text-[var(--color-primary)] font-semibold mb-6 text-xl">
          <span>LexiPro</span>
        </div>

        {/* Headings - Updated text color */}
        <h1 className="text-3xl font-bold mb-2 text-white">Welcome back</h1>
        <p className="text-[var(--color-text)]/70 mb-8">
          Sign in to continue your conversation
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm text-[var(--color-text)]/70 mb-1">
              Username or email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              // Input styling using theme variables
              className="w-full p-3 border border-[var(--color-border)] rounded-md bg-[var(--color-input-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm text-[var(--color-text)]/70 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPass(e.target.value)}
              // Input styling using theme variables
              className="w-full p-3 border border-[var(--color-border)] rounded-md bg-[var(--color-input-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex justify-between items-center text-sm text-[var(--color-text)]/90">
            <span>Remember me</span>
            <a
              href="#"
              className="underline text-[var(--color-primary)] hover:text-white transition"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          {/* Original: bg-indigo-600 | New: bg-[var(--color-primary)] */}
          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-white p-3 rounded-md hover:bg-opacity-80 transition"
          >
            Sign in
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            {/* Divider uses border color */}
            <div className="w-full border-t border-[var(--color-border)]"></div>
          </div>
          <div className="relative flex justify-center text-[var(--color-text)]/50 text-sm">
            <span className="bg-[var(--color-bacground)] px-2">or</span>
          </div>
        </div>

        {/* Social Sign-in Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center gap-2 justify-center w-full border border-[var(--color-border)] rounded-md p-3 text-[var(--color-text)] hover:bg-[var(--color-item-hover)] transition">
            {/* Replace with your actual icon component */}
            {/* <HiOutlineMail size={20} /> */} ✉️ Email link
          </button>
          <button className="flex items-center gap-2 justify-center w-full border border-[var(--color-border)] rounded-md p-3 text-[var(--color-text)] hover:bg-[var(--color-item-hover)] transition">
            {/* Replace with your actual icon component */}
            {/* <FaGithub size={20} /> */} 💻 GitHub
          </button>
        </div>

        {/* Create Account Link */}
        <p className="text-center text-[var(--color-text)]/50 text-xs mt-6">
          Don’t have an account?{" "}
          <NavLink
            to="/signup"
            className="underline font-semibold text-[var(--color-primary)] hover:text-white transition"
          >
            Create one
          </NavLink>
        </p>
      </div>

      {/* 3. Right Chat Panel - Hidden on mobile, half width on desktop */}
      {/* Hidden on small screens: hidden | Shown on medium screens: md:flex md:w-1/2 */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-10">
        {/* Chat window container */}
        <div className="w-full max-w-2xl rounded-xl border border-[var(--color-border)] p-4 space-y-4 shadow-xl bg-gray-900/50">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-2">
            <div className="flex items-center gap-2 font-semibold text-[var(--color-text)]">
              LexiPro Chat
            </div>
            <div className="flex items-center gap-4 text-[var(--color-text)]/70 text-sm">
              <button className="hover:text-[var(--color-primary)] transition">
                Upgrade
              </button>
              <button className="p-1 rounded hover:bg-[var(--color-item-hover)] transition">
                {/* Icon placeholder */}
              </button>
            </div>
          </div>

          {/* Chat Messages - Scrollable area */}
          <div className="flex flex-col gap-4 max-h-64 overflow-y-auto">
            {/* AI Message Bubble */}
            <div className="flex items-start gap-3">
              <img
                src="https://i.pravatar.cc/24?img=15"
                alt="avatar"
                className="rounded-full w-6 h-6"
              />
              {/* Uses AI bubble color and text color */}
              <div className="bg-[var(--color-ai-bubble)] text-[var(--color-text)] px-4 py-2 rounded-xl max-w-xs">
                Hi! Ask me anything about your projects.
              </div>
            </div>

            {/* User Message Bubble */}
            <div className="flex items-start gap-3 justify-end">
              {/* Uses User bubble color and dark text for contrast (or keep white) */}
              <div className="bg-[var(--color-user-bubble)] text-[var(--color-text)] px-4 py-2 rounded-xl max-w-xs">
                Show my recent chats.
              </div>
              <img
                src="https://i.pravatar.cc/24?img=32"
                alt="avatar"
                className="rounded-full w-6 h-6"
              />
            </div>
          </div>

          {/* Message Input */}
          <form className="flex items-center gap-2 mt-4 border border-[var(--color-border)] rounded-full px-4 py-2 bg-[var(--color-input-bg)]">
            <input
              type="text"
              placeholder="Write a message..."
              className="flex-grow outline-none bg-transparent text-[var(--color-text)] placeholder-[var(--color-text)]/50"
            />
            <button
              type="submit"
              className="text-[var(--color-primary)] font-medium hover:text-white transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
