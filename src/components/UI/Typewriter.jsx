import { useEffect, useState } from "react";

const Typewriter = ({ text, speed = 30, onceKey }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    // If already animated once, just show text immediately
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
        setDone(true); // mark as done after finishing
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, done]);

  return <>{displayed}</>;
};

export default Typewriter;
