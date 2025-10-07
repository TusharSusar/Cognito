import React from "react";
import { ScaleLoader } from "react-spinners";

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-bacground">
      <ScaleLoader color="#0CAFFF" size={24} />
    </div>
  );
}

export default Loading;
