import React from "react";
import { Button } from "./ui/button";

const DownloadExtension: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-[400px] w-full text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Download Chrome Extension
        </h1>
        <p className="text-gray-600">
          Click below to download the extension files:
        </p>
        <div className="space-y-2">
          <Button
            className="w-full"
            onClick={() => (window.location.href = "/dist.zip")}
          >
            Download Extension
          </Button>
          <p className="text-sm text-gray-500">
            After downloading:
            <ol className="text-left list-decimal pl-5 mt-2 space-y-1">
              <li>Unzip the downloaded file</li>
              <li>Open Chrome and go to chrome://extensions</li>
              <li>Enable "Developer mode" (top right)</li>
              <li>Click "Load unpacked"</li>
              <li>Select the unzipped folder</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadExtension;
