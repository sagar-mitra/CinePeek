import React, { useEffect, useRef, useState } from "react";
import { USER_LOGO } from "../utils/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [active, isActive] = useState("Home");
  const [searchIcon, setSearchIcon] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navItems = [
    { name: "Home", to: "/", id: 1 },
    { name: "TV Shows", to: "/tv", id: 2 },
    { name: "Movies", to: "/movies", id: 3 },
  ];

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const navigate = useNavigate();

  //Navbar BackGround Change
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 16) {
        navRef.current.classList.add("nav-dark");
        navRef.current.classList.remove("nav-light");
      } else {
        navRef.current.classList.add("nav-light");
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  const toggleActive = (name) => {
    isActive(name);
  };

  // Handle search button
  const handleSearch = () => {
    if (isDesktop) {
      if (searchText) {
        navigate(`/search?query=${encodeURIComponent(searchText)}`);
        // setSearchIcon(true);
        setSearchText("");
      } else {
        setSearchIcon(!searchIcon);
      }
    } else {
      navigate(`/search?query=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <div
      ref={navRef}
      className=" h-10 sm:h-16 flex items-center justify-between fixed top-0 w-screen pl-3 md:pl-10 pr-3 md:pr-10 text-[var(--text-primary)] z-50"
    >
      {/* Left Side */}
      <div className="flex items-center cursor-pointer ">
        {/* logo */}
        <Link to="/" className="mr-10">
          <h1 className="font-medium text-2xl font-(family-name:--font-logo)">CinePeek</h1>
        </Link>
        {/* Nav Items  */}
        <div className="max-sm:hidden">
          <ul className="flex gap-9 font-medium cursor-pointer ">
            {navItems.map((nav) => {
              return (
                <Link
                  to={nav.to}
                  key={nav.id}
                  className={` ${
                    active === nav.name
                      ? "text-[var(--text-primary) text-red-500 font-bold border-b-2"
                      : "text-[var(--text-muted)"
                  } py-1`}
                  onClick={() => toggleActive(nav.name)}
                >
                  {nav.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex gap-10 cursor-pointer ">
        {/* Search  */}
        <div className="flex items-center">
          <i className="bx  bx-search text-2xl mr-1" onClick={handleSearch}></i>

          <AnimatePresence>
            {searchIcon && (
              <motion.input
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "14rem" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className={`font-medium outline-none border-b max-lg:hidden`}
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search"
              />
            )}
          </AnimatePresence>
        </div>

        {/* User Profile */}
        <div className="h-5 sm:h-8">
          <img className="h-full rounded" src={USER_LOGO} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
