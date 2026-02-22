import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return <footer className="py-6 tracking-wide text-center text-gray-500">© {year} boburdv.uz</footer>;
}
