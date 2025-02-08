import React from "react";
import ExtensionPopup from "./ExtensionPopup";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-[400px] w-full">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Product Analysis Extension
        </h1>
        <ExtensionPopup />
      </div>
    </div>
  );
};

export default Home;
