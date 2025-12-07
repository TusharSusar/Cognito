import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/context";
import { auth } from "../Firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BsGoogle } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();
  const { registerNewUser } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState({
    nameerror: "",
    normal: "",
    passerror: "",
  });

  const handlePass = (value) => {
    setPass(value);
    if (value.length < 6) {
      setError((prev) => ({
        ...prev,
        passerror: "Password must be at least 6 characters long!",
      }));
    } else {
      setError((prev) => ({ ...prev, passerror: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // reset errors
    setError({
      nameerror: "",
      normal: "",
      passerror: "",
    });

    // Name validation
    if (name.trim() === "") {
      setError((prev) => ({
        ...prev,
        nameerror: "Name cannot be empty",
      }));
      return;
    }

    // Email validation
    if (email.trim() === "") {
      setError((prev) => ({
        ...prev,
        normal: "Email is required",
      }));
      return;
    }

    // Password validation
    if (pass.trim() === "") {
      setError((prev) => ({
        ...prev,
        normal: "Password is required",
      }));
      return;
    }

    if (pass.length < 6) {
      setError((prev) => ({
        ...prev,
        passerror: "Password must be at least 6 characters",
      }));
      return;
    }

    // If all good → create user
    try {
      await registerNewUser(email, pass, name);
      navigate("/chat");
    } catch (err) {
      setError((prev) => ({
        ...prev,
        normal: err.message,
      }));
    }
  };

  return (
    <div className="relative flex items-center justify-center sm:flex-col md:flex-row h-dvh sm:min-h-screen bg-[var(--color-bacground)] text-[var(--color-text)]">
      <button
        type="button"
        className="absolute top-0 left-0 m-2 p-1 md:m-4 md:p-2 rounded-full cursor-pointer hover:bg-input-bg"
        onClick={() => navigate("/")}
      >
        <IoArrowBackCircleOutline size={25} color="#0CAFFF" />
      </button>
      {/* 2. Left Login Panel - Responsive width and dark theme */}
      <div className="w-full md:w-1/2 max-w-md px-10 sm:px-6 flex flex-col justify-center  md:px-10 md:py-0 md:border-r border-[var(--color-border)]">
        <div className="flex items-center space-x-2 text-[var(--color-primary)] font-semibold mb-2 text-xl">
          <span>Cognito</span>
        </div>

        {/* <h1 className="text-3xl font-bold mb-2 text-white">
          Welcome Developer,
        </h1> */}
        <p className="text-[var(--color-text)]/70 mb-8">
          Create your free account to start your conversations
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm text-[var(--color-text)]/70 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-[var(--color-border)] rounded-md bg-[var(--color-input-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            {error.nameerror && (
              <h1 className="my-2 text-sm text-red-500">{error.nameerror}</h1>
            )}
          </div>
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
            {error.normal && (
              <h1 className="my-2 text-sm text-red-500">{error.normal}</h1>
            )}
          </div>
          {/* Password Input */}
          <div>
            <label className="block text-sm text-[var(--color-text)]/70 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => handlePass(e.target.value)}
              // Input styling using theme variables
              className="w-full p-3 border border-[var(--color-border)] rounded-md bg-[var(--color-input-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            {error.passerror && (
              <h1 className="my-2 text-sm text-red-500">{error.passerror}</h1>
            )}
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
          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-white font-semibold p-3 rounded-md hover:bg-opacity-80 transition cursor-pointer hover:bg-[#1E90FF]"
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
            {/* <HiOutlineMail size={20} /> */} <FcGoogle /> Google
          </button>
          <button className="flex items-center gap-2 justify-center w-full border border-[var(--color-border)] rounded-md p-3 text-[var(--color-text)] hover:bg-[var(--color-item-hover)] transition">
            {/* Replace with your actual icon component */}
            {/* <FaGithub size={20} /> */} <FaGithub /> GitHub
          </button>
        </div>

        {/* Create Account Link */}
        <p className="text-center text-[var(--color-text)]/50 text-xs mt-6">
          Don’t have an account?{" "}
          <NavLink
            to="/"
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
              Cognito Chat
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
