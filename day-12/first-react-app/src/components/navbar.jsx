import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-2">
      <div className="flex space-x-6">
        <a href="#" className="px-6 py-2 font-medium">
          iStock
        </a>
        <a href="#" className="px-6 py-2 font-medium">
          About
        </a>
        <a href="#" className="px-6 py-2 font-medium">
          Services
        </a>
      </div>

      <div className="flex">
        <a href="#" className="rounded-lg bg-orange-400 px-6 py-2 font-medium">
          Contact
        </a>
      </div>
    </header>
  );
}
