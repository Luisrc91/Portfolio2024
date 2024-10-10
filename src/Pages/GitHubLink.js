import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GitHubLink() {
  return (
    <div>
      <a
        style={{ color: "white", fontSize: "50px" }}
        href="https://github.com/Luisrc91"
      >
        {" "}
        <FaGithub />
      </a>
    </div>
  );
}
