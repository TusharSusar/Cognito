// // import { useEffect, useState } from "react";

// // const Typewriter = ({ text, speed = 30, onceKey }) => {
// //   const [displayed, setDisplayed] = useState("");
// //   const [done, setDone] = useState(false);

// //   useEffect(() => {
// //     // If already animated once, just show text immediately
// //     if (done) {
// //       setDisplayed(text);
// //       return;
// //     }

// //     let i = 0;
// //     setDisplayed("");

// //     const interval = setInterval(() => {
// //       setDisplayed((prev) => prev + text.charAt(i));
// //       i++;
// //       if (i >= text.length) {
// //         clearInterval(interval);
// //         setDone(true); // mark as done after finishing
// //       }
// //     }, speed);

// //     return () => clearInterval(interval);
// //   }, [text, speed, done]);

// //   return <>{displayed}</>;
// // };

// // export default Typewriter;

// import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// const Typewriter = ({ text, speed, onceKey }) => {
//   const [displayed, setDisplayed] = useState("");
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     if (done) {
//       setDisplayed(text);
//       return;
//     }

//     let i = 0;
//     setDisplayed("");

//     const interval = setInterval(() => {
//       setDisplayed((prev) => prev + text.charAt(i));
//       i++;
//       if (i >= text.length) {
//         clearInterval(interval);
//         setDone(true);
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed, done, onceKey]);

//   return (
//     <ReactMarkdown
//       children={displayed}
//       remarkPlugins={[remarkGfm]}
//       components={{
//         h1: ({ node, ...props }) => (
//           <div>
//             <h1
//               className="text-2xl font-bold mt-4 mb-2 border-b border-gray-600 pb-1"
//               {...props}
//             />
//             <hr className="my-3 border-gray-700" />
//           </div>
//         ),
//         h2: ({ node, ...props }) => (
//           <div>
//             <h2
//               className="text-xl font-semibold mt-3 mb-2 text-blue-400"
//               {...props}
//             />
//             <hr className="my-2 border-gray-700" />
//           </div>
//         ),
//         p: ({ node, ...props }) => (
//           <p className="my-2 leading-relaxed text-gray-200" {...props} />
//         ),
//         ul: ({ node, ...props }) => (
//           <div>
//             <ul
//               className="list-disc pl-6 mx-6 my-3 space-y-2 text-gray-200"
//               {...props}
//             />
//             <hr className="my-3 border-gray-700" />
//           </div>
//         ),
//         li: ({ node, ...props }) => (
//           <li
//             className="leading-relaxed my-4 marker:text-gray-400"
//             {...props}
//           />
//         ),
//         hr: () => <hr className="my-4 border-gray-600" />,
//         code: ({ node, inline, ...props }) =>
//           inline ? (
//             <code
//               className="bg-primary/20 text-yellow-300 px-1 rounded"
//               {...props}
//             />
//           ) : (
//             <pre className="bg-primary/20 text-white p-3 rounded-lg overflow-x-auto">
//               <code {...props} />
//             </pre>
//           ),
//       }}
//     />
//   );
// };

// export default Typewriter;

import { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Typewriter = ({ text, speed = 30, onceKey }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const prevOnceKeyRef = useRef(onceKey);

  useEffect(() => {
    // Reset when onceKey changes (new message)
    if (prevOnceKeyRef.current !== onceKey) {
      prevOnceKeyRef.current = onceKey;
      setDisplayed("");
      setDone(false);
    }
  }, [onceKey]);

  useEffect(() => {
    // If animation is done, show full text immediately
    if (done) {
      setDisplayed(text);
      return;
    }

    // Start typing animation
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      <style>{`
        .markdown-container h1 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
          border-bottom: 1px solid #4B5563;
          padding-bottom: 0.5rem;
          overflow: hidden;
        }

        .markdown-container h2 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 0.75rem;
          margin-bottom: 0.5rem;
          color: #60A5FA;
        }

        .markdown-container h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-top: 0.5rem;
          margin-bottom: 0.25rem;
          color: #93C5FD;
        }

        .markdown-container p {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.625;
          color: #D1D5DB;
          font-size: 0.875rem;
        }

        @media (min-width: 640px) {
          .markdown-container p {
            font-size: 1rem;
          }
        }

        .markdown-container ul,
        .markdown-container ol {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          color: #D1D5DB;
          font-size: 0.875rem;
        }

        @media (min-width: 640px) {
          .markdown-container ul,
          .markdown-container ol {
            font-size: 1rem;
          }
        }

        .markdown-container ul {
          list-style-type: disc;
          padding-left: 1rem;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          gap: 0.25rem;
        }

        @media (min-width: 640px) {
          .markdown-container ul {
            padding-left: 1.5rem;
            margin-left: 1rem;
            margin-right: 1rem;
          }
        }

        .markdown-container ol {
          list-style-type: decimal;
          padding-left: 1rem;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          gap: 0.25rem;
        }

        @media (min-width: 640px) {
          .markdown-container ol {
            padding-left: 1.5rem;
            margin-left: 1rem;
            margin-right: 1rem;
          }
        }

        .markdown-container li {
          line-height: 1.625;
          margin-top: 0.25rem;
        }

        .markdown-container blockquote {
          border-left: 4px solid #60A5FA;
          padding-left: 0.75rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-style: italic;
          color: #D1D5DB;
          font-size: 0.875rem;
        }

        @media (min-width: 640px) {
          .markdown-container blockquote {
            padding-left: 1rem;
            font-size: 1rem;
          }
        }

        .markdown-container hr {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
          border-color: #374151;
        }

        @media (min-width: 640px) {
          .markdown-container hr {
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
        }

        .markdown-container code {
          background-color: rgba(6, 182, 212, 0.1);
          color: #FCD34D;
          padding: 0.375rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }

        .markdown-container pre {
          background-color: #111827;
          border: 1px solid #374151;
          color: #FFFFFF;
          padding: 0.5rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
        }

        @media (min-width: 640px) {
          .markdown-container pre {
            padding: 0.75rem;
            font-size: 0.875rem;
          }
        }

        .markdown-container pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
          border-radius: 0;
        }

        .markdown-container a {
          color: #60A5FA;
          text-decoration: underline;
        }

        .markdown-container a:hover {
          color: #93C5FD;
        }

        .markdown-container strong {
          font-weight: 700;
          color: #FFFFFF;
        }

        .markdown-container em {
          font-style: italic;
          color: #D1D5DB;
        }
      `}</style>

      <div className="markdown-container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {displayed}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Typewriter;