import { exec } from "child_process";
import fs from "fs";
import archiver from "archiver";

// First build the project
exec("npm run build", (error) => {
  if (error) {
    console.error("Build failed:", error);
    return;
  }

  // Create a zip file
  const output = fs.createWriteStream("extension.zip");
  const archive = archiver("zip");

  output.on("close", () => {
    console.log("Extension has been zipped!");
  });

  archive.pipe(output);

  // Add the dist directory contents to the zip
  archive.directory("dist/", false);

  archive.finalize();
});
