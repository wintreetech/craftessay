import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(followerRef.current, {
      x: 0,
      duration: 0.6,
      ease: "power3",
    });
    const yTo = gsap.quickTo(followerRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power3",
    });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="custom-cursor"
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        background: "linear-gradient(to right, #00B4DB, #0083B0)",
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

export default CustomCursor;
