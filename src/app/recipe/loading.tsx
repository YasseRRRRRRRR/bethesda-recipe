import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="loader">
        <LoaderCircle className="animate-spin text-violet-500" size={48} />
        <p className="text-lg text-center mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
