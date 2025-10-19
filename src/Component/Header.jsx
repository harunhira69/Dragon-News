import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center text-center gap-2 sm:gap-3 py-4 px-3">
      {/* Logo */}
      <img
        src={logo}
        alt="News Portal Logo"
        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
      />

      {/* Tagline */}
      <p className="text-xs sm:text-sm md:text-base text-accent font-medium">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="text-[12px] sm:text-sm md:text-base text-gray-500">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </header>
  );
};

export default Header;
