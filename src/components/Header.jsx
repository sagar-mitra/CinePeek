import React, { useState } from "react";
import { USER_LOGO} from "../utils/constants"
const Header = () => {
  const [active, isActive] = useState("Home");

  const navItems = [
    { name: "Home", to: "/home", id: 1 },
    { name: "TV Shows", to: "/tv", id: 2 },
    { name: "Movies", to: "/movies", id: 3 },
  ];

  const toggleActive = (name) => {
    isActive(name);
  };

  return (
    <div className=" h-16 flex items-center justify-between fixed top-0 w-screen pl-10 pr-10 text-[var(--text-primary)] backdrop-blur-xl">
      {/* Left Side */}
      <div className="flex items-center cursor-pointer ">
        {/* logo */}
        <div className="mr-10">
          <h1 className="font-bold text-2xl">MovieQ</h1>
        </div>
        {/* Nav Items  */}
        <div className="max-sm:hidden">
          <ul className="flex gap-9 font-medium cursor-pointer ">
            {navItems.map((nav) => {
              return (
                <li
                  key={nav.id}
                  className={` ${
                    active === nav.name
                      ? "text-[var(--text-primary) text-red-500 font-bold border-b-2"
                      : "text-[var(--text-muted)"
                  } py-1`}
                  onClick={() => toggleActive(nav.name)}
                >
                  {nav.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex gap-10 ">
        {/* Search  */}
        <div>
          <i class="bx  bx-search text-2xl md:text-3xl "></i>
        </div>

        {/* User Profile */}
        <div className="h-7 sm:h-8">
          <img className="h-full rounded" src={USER_LOGO} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
