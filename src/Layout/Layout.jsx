import React, { useEffect, useState } from "react";
import { Navbar, Footer } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { HiArrowNarrowUp } from "react-icons/hi";
import AOS from "aos";
import Cookie from "../components/Cookie";

function Layout() {
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Go upward arrow - show , unshow
  const [showArrow, setShowArrow] = useState(false);

  const handleArrow = () => {
    if (window.scrollY > 500) {
      setShowArrow(true);
    } else setShowArrow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleArrow);
    return () => {
      window.removeEventListener("scroll", handleArrow);
    };
  }, [showArrow]);

  return (
    <>
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={`bg-primary  hover:scale-110 p-3 text-lg text-white rounded-2xl fixed left-3 z-10 duration-500 ease-in-out ${
          showArrow ? "bottom-6" : "-bottom-24"
        } `}
      >
        <HiArrowNarrowUp />
      </button>
      <Navbar />
      <Outlet />
      <Cookie />
      <Footer />
    </>
  );
}

export default Layout;
