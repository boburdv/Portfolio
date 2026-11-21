import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaFileAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Social({ showInstagram = false }) {
  return (
    <div className="flex gap-6 sm:gap-6 text-[#162232]">
      {showInstagram ? (
        <a href="https://instagram.com/boburdv" target="_blank" rel="noopener noreferrer">
          <RiInstagramFill className="text-[22px] sm:text-[24px]" />
        </a>
      ) : (
        <a href="/Boburbek-Resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt className="text-[22px] sm:text-[24px]" />
        </a>
      )}
      <a href="https://github.com/boburdv" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-[22px] sm:text-[24px]" />
      </a>
      <a href="https://linkedin.com/in/boburdv" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-[22px] sm:text-[24px]" />
      </a>
      <a href="https://t.me/boburdv" target="_blank" rel="noopener noreferrer">
        <FaTelegram className="text-[22px] sm:text-[24px]" />
      </a>
    </div>
  );
}
