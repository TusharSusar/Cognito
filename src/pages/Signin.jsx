// import React, { useState } from "react";

import { FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

// const CognitoIcon = () => (
//   <svg
//     className="w-5 h-5 mr-2 text-[#0CAFFF]"
//     fill="none"
//     stroke="currentColor"
//     viewBox="0 0 24 24"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3a4 4 0 11-4-4v2a2 2 0 100 4v1m-4 5a3 3 0 100-6 3 3 0 000 6z"
//     ></path>
//   </svg>
// );

// // Icon Placeholder for GitHub
// const GitHubIcon = () => (
//   <svg
//     className="w-5 h-5 mr-2"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     aria-hidden="true"
//   >
//     <path
//       fillRule="evenodd"
//       d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.682-.217.682-.483 0-.237-.008-.865-.013-1.795-2.782.604-3.37-1.341-3.37-1.341-.454-1.15-.11-1.459-.11-1.459.93-.637 1.405.097 1.405.097.828 1.403 2.164.996 2.693.758.084-.587.324-.997.592-1.226-2.05-.23-4.21-1.026-4.21-4.576 0-1.012.358-1.84.949-2.483-.095-.231-.413-1.176.091-2.453 0 0 .77-.247 2.522.946A8.28 8.28 0 0112 6.84c.85.006 1.7.112 2.5.334 1.75-1.193 2.518-.946 2.518-.946.505 1.277.187 2.222.092 2.453.59.643.947 1.47.947 2.483 0 3.559-2.163 4.346-4.216 4.572.336.29.673.834.673 1.678 0 1.226-.011 2.213-.011 2.516 0 .267.18.58.688.484C19.137 20.198 22 16.442 22 12.017 22 6.484 17.523 2 12 2z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signing in with:", email, password);
//     // In a real app, you would handle Firebase authentication here
//   };

//   return (
//     // The form wrapper now relies on the parent column for height and positioning
//     <div className="flex flex-col p-6 md:p-10 rounded-2xl w-full max-w-md  bg-black  shadow-2xl">
//       <div className="flex items-center mb-8">
//         <CognitoIcon />
//         <span className="font-semibold text-xl">Cognito</span>
//       </div>

//       <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
//       <p className="text-sm text-gray-400 mb-8">
//         Sign in to continue your conversation
//       </p>

//       <form onSubmit={handleSubmit}>
//         <div className="mb-6">
//           <label
//             className="block text-sm font-medium text-gray-300 mb-1"
//             htmlFor="username"
//           >
//             Username or email
//           </label>
//           <input
//             className="w-full p-3 rounded-xl bg-[rgba(69,69,69,.5)] text-[#f1f1f1] border border-[rgba(255,255,255,.2)] focus:outline-none focus:ring-2 focus:ring-[#0CAFFF] transition-colors"
//             type="text"
//             id="username"
//             placeholder="name@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="mb-6">
//           <label
//             className="block text-sm font-medium text-gray-300 mb-1"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             className="w-full p-3 rounded-xl bg-[rgba(69,69,69,.5)] text-[#f1f1f1] border border-[rgba(255,255,255,.2)] focus:outline-none focus:ring-2 focus:ring-[#0CAFFF] transition-colors"
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="flex justify-between items-center mb-8 text-sm">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="remember"
//               className="mr-2 text-[#0CAFFF] bg-[rgba(69,69,69,.5)] border-gray-600 rounded focus:ring-[#0CAFFF]"
//             />
//             <label htmlFor="remember" className="text-gray-400">
//               Remember me
//             </label>
//           </div>
//           <a
//             href="#"
//             className="text-[#0CAFFF] font-medium hover:text-white transition-colors"
//           >
//             Forgot password?
//           </a>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 rounded-xl bg-[#0CAFFF] text-white font-bold text-lg hover:bg-[rgba(9,143,204,.5)] transition-colors shadow-lg shadow-[#0CAFFF]/30"
//         >
//           Sign in
//         </button>
//       </form>

//       <div className="text-center my-6 text-gray-400">or</div>

//       <div className="flex flex-col space-y-4">
//         <button className="flex items-center justify-center w-full py-3 rounded-xl border border-[rgba(255,255,255,.2)] text-[#f1f1f1] font-medium hover:bg-[rgba(69,69,69,.4)] transition-colors">
//           <span role="img" aria-label="email" className="mr-2 text-xl">
//             🔗
//           </span>
//           Email link
//         </button>
//         <button className="flex items-center justify-center w-full py-3 rounded-xl border border-[rgba(255,255,255,.2)] text-[#f1f1f1] font-medium hover:bg-[rgba(69,69,69,.4)] transition-colors">
//           <GitHubIcon />
//           GitHub
//         </button>
//       </div>

//       <p className="text-center text-sm mt-10 text-gray-400">
//         Don't have an account?
//         <a
//           href="#"
//           className="text-[#0CAFFF] font-medium hover:text-white ml-1 transition-colors"
//         >
//           Create one
//         </a>
//       </p>
//     </div>
//   );
// };

// const ChatPreview = () => {
//   return (
//     <div className="w-full max-w-md xl:max-w-lg p-6 md:p-8 rounded-2xl bg-[rgba(69,69,69,.5)] border border-[rgba(255,255,255,.2)] shadow-2xl">
//       {/* Header */}
//       <div className="flex justify-between items-center pb-4 border-b border-[rgba(255,255,255,.1)] mb-6">
//         <div className="flex items-center">
//           <CognitoIcon />
//           <span className="font-semibold text-lg">Cognito Chat</span>
//         </div>
//         <div className="flex items-center space-x-3 text-sm">
//           <button className="py-1 px-3 rounded-full border border-gray-400 text-gray-300 hover:bg-[rgba(69,69,69,.4)] transition-colors">
//             Upgrade
//           </button>
//           {/* Settings Icon */}
//           <svg
//             className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
//             ></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//             ></path>
//           </svg>
//         </div>
//       </div>

//       {/* Chat Messages */}
//       <div className="flex flex-col space-y-4 h-48 overflow-y-auto pr-2">
//         {/* AI Message */}
//         <div className="flex items-end">
//           <div className="w-8 h-8 rounded-full bg-[#0CAFFF] flex-shrink-0 mr-2 border border-[rgba(255,255,255,.2)]"></div>
//           <div className="p-3 rounded-t-xl rounded-br-xl bg-[rgba(69,69,69,.5)] text-[#f1f1f1] max-w-xs md:max-w-md shadow-md">
//             Hi! Ask me anything about your projects.
//           </div>
//         </div>

//         {/* User Message */}
//         <div className="flex justify-end items-end">
//           <div className="p-3 rounded-t-xl rounded-bl-xl bg-[rgba(0,191,255,.2)] text-[#f1f1f1] max-w-xs md:max-w-md shadow-md border border-[#0CAFFF]/20">
//             Show my recent chats.
//           </div>
//           <div className="w-8 h-8 rounded-full bg-red-400 flex-shrink-0 ml-2 border border-[rgba(255,255,255,.2)]"></div>
//         </div>
//       </div>

//       {/* Input Area */}
//       <div className="mt-8 flex items-center space-x-3">
//         <input
//           type="text"
//           className="flex-grow p-3 rounded-xl bg-black border border-[rgba(255,255,255,.2)] text-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-[#0CAFFF] transition-colors"
//           placeholder="Write a message..."
//         />
//         <button className="py-3 px-6 rounded-xl bg-[#0CAFFF] text-white font-semibold hover:bg-[rgba(9,143,204,.5)] transition-colors flex-shrink-0">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// const Signin = () => {
//   return (
//     // Main Container: Full viewport height (h-screen), dark background, using flex-row on desktop
//     <div className="h-screen bg-black text-[#f1f1f1] flex flex-col md:flex-row w-full overflow-auto">
//       {/* Left Column: Sign-In Form - Fixed width (450px) and Full height (h-full) on desktop */}
//       <div className="w-full h-auto md:w-[450px] md:h-full flex justify-center items-center p-4 md:p-12 overflow-y-auto flex-shrink-0 border-r border-[rgba(255,255,255,.2)]">
//         {/* Sign-In Form is centered vertically and horizontally within this panel */}
//         <SignInForm />
//       </div>

//       {/* Right Column: Chat Preview - Takes remaining space (flex-grow) and is centered */}
//       <div className="hidden md:flex flex-grow justify-center items-center p-4 md:p-12">
//         <ChatPreview />
//       </div>
//     </div>
//   );
// };

//! export default Signin;

export default function Signin() {
  return (
    <div className="flex items-center justify-center sm:flex-col md:flex-row min-h-screen bg-[var(--color-bacground)] text-[var(--color-text)]">
      {/* 2. Left Login Panel - Responsive width and dark theme */}
      {/* sm:p-6 for mobile padding, md:w-1/2 for desktop width */}
      <div className="w-full md:w-1/2 max-w-md px-16 sm:px-6 flex flex-col justify-center py-12 md:px-10 md:py-0 md:border-r border-[var(--color-border)]">
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
        <form className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-sm text-[var(--color-text)]/70 mb-1">
              Username or email
            </label>
            <input
              type="email"
              placeholder="name@example.com"
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
          <a
            href="#"
            className="underline font-semibold text-[var(--color-primary)] hover:text-white transition"
          >
            Create one
          </a>
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
