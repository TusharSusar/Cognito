// import { useEffect, useState } from "react";

// const Typewriter = ({ text, speed = 30, onceKey }) => {
//   const [displayed, setDisplayed] = useState("");
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     // If already animated once, just show text immediately
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
//         setDone(true); // mark as done after finishing
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed, done]);

//   return <>{displayed}</>;
// };

// export default Typewriter;

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Typewriter = ({ text, speed, onceKey }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      setDisplayed(text);
      return;
    }

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
  }, [text, speed, done, onceKey]);

  return (
    <ReactMarkdown
      children={displayed}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => (
          <div>
            <h1
              className="text-2xl font-bold mt-4 mb-2 border-b border-gray-600 pb-1"
              {...props}
            />
            <hr className="my-3 border-gray-700" />
          </div>
        ),
        h2: ({ node, ...props }) => (
          <div>
            <h2
              className="text-xl font-semibold mt-3 mb-2 text-blue-400"
              {...props}
            />
            <hr className="my-2 border-gray-700" />
          </div>
        ),
        p: ({ node, ...props }) => (
          <p className="my-2 leading-relaxed text-gray-200" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <div>
            <ul
              className="list-disc pl-6 mx-6 my-3 space-y-2 text-gray-200"
              {...props}
            />
            <hr className="my-3 border-gray-700" />
          </div>
        ),
        li: ({ node, ...props }) => (
          <li
            className="leading-relaxed my-4 marker:text-gray-400"
            {...props}
          />
        ),
        hr: () => <hr className="my-4 border-gray-600" />,
        code: ({ node, inline, ...props }) =>
          inline ? (
            <code
              className="bg-primary/20 text-yellow-300 px-1 rounded"
              {...props}
            />
          ) : (
            <pre className="bg-primary/20 text-white p-3 rounded-lg overflow-x-auto">
              <code {...props} />
            </pre>
          ),
      }}
    />
  );
};

export default Typewriter;
