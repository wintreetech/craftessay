import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";
import { navlinks } from "../content/Content";
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Fragment>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg py-4 transition duration-300">
        <div className="w-screen-lg mx-5 flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center mr-4">
            <img className="h-14 w-auto" src={logo} alt="Brand Logo" />
            <p className="sr-only">Website Title</p>
          </Link>

          {/* Centered Menu Items */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navlinks.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.URL}
                  className="text-gray-800 text-lg font-semibold relative transition duration-200 hover:text-[#a7325e] after:content-[''] after:block after:w-0 after:h-1 after:bg-[#a7325e] after:transition-all after:duration-200 after:rounded"
                >
                  {item.name}
                </Link>
                {/* Dropdown Menu */}
                {item.subItems && (
                  <div
                    className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.URL}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <Link
              to="/order"
              target="_blank"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-[#a7325e] px-4 mx-4 py-2 text-sm font-semibold text-white shadow-md transition duration-150 hover:bg-[#901945] focus:outline-none"
            >
              Order Now <FaArrowRight className="ml-2" />
            </Link>
            <Link
              to="/order/my-account"
              target="_blank"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-[#a7325e] px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-150 hover:bg-[#901945] focus:outline-none"
            >
              Login/Signup <FaArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-[#a7325e] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <RxCross1 className="w-6 h-6" />
              ) : (
                <BsList className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-md shadow-md p-4 border border-gray-200">
            <div className="flex flex-col text-center space-y-2">
              {navlinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.URL}
                  className="text-gray-800 block py-2 px-4 rounded transition duration-200 hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/order"
                target="_blank"
                className="bg-[#a7325e] hover:bg-[#901945] text-white font-bold py-2 px-4 rounded-full focus:outline-none transition duration-200"
              >
                Order Now
              </Link>
              <Link
                to="/order/my-account"
                target="_blank"
                className="bg-[#a7325e] hover:bg-[#901945] text-white font-bold py-2 px-4 rounded-full focus:outline-none transition duration-200"
              >
                Login/Signup
              </Link>
            </div>
          </div>
        )}
      </header>
    </Fragment>
  );
}

export default Navbar;
