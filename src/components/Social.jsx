import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaFileAlt } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex gap-6 text-[#162232]">
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <FaFileAlt size={23} />
      </a>
      <a href="https://github.com/boburdv" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/boburdv" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="https://t.me/boburdv" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={24} />
      </a>
    </div>
  );
}
