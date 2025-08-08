import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[var(--main-color)] pt-20">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <h1 className="font-medium text-2xl font-(family-name:--font-logo) text-white">
              CinePeek
            </h1>
          </a>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-[var(--text-highlight)] dark:text-gray-300 dark:hover:text-[var(--text-highlight)]"
              aria-label="Reddit"
            >
              {" "}
              Home{" "}
            </Link>

            <Link
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-[var(--text-highlight)] dark:text-gray-300 dark:hover:text-[var(--text-highlight)]"
              aria-label="Reddit"
            >
              {" "}
              About{" "}
            </Link>

            <Link
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-[var(--text-highlight)] dark:text-gray-300 dark:hover:text-[var(--text-highlight)]"
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </Link>

            <Link
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-[var(--text-highlight)] dark:text-gray-300 dark:hover:text-[var(--text-highlight)]"
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </Link>

            <Link
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-[var(--text-highlight)] dark:text-gray-300 dark:hover:text-[var(--text-highlight)]"
              aria-label="Reddit"
            >
              {" "}
              Cookies{" "}
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Developed by Sagar
          </p>

          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[var(--text-highlight)] dark:hover:text-[var(--text-highlight)]"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/sagar-mitra"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-[var(--text-highlight)] dark:hover:text-[var(--text-highlight)]"
              aria-label="Github"
            >
              <IoLogoGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
