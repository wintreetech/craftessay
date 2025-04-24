import React from "react";

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show
    ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity duration-300 ease-in-out"
    : "hidden";

  return (
    <div className={showHideClassName}>
      <div className="bg-gradient-to-r from-white via-gray-100 to-white p-6 w-11/12 sm:w-96 max-w-full mx-4 sm:mx-0 relative animate-popup rounded-lg border-2 border-dashed border-[#e2aec2f2]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-[#e2aec2f2] p-1.5 rounded-full hover:bg-[#e2aec2f2] transition-transform duration-200 transform hover:rotate-90"
        >
          <svg
            className="h-6 w-6 text-[#a7325ef2]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header with Decorative Line */}
        <div className="mb-4">
          <h2 className="text-xl font-extrabold text-gray-800 text-center mb-2">
            Special Offer Just for You!
          </h2>
          <hr className="border-t-2 border-[#ea92af] w-1/2 mx-auto mb-3" />
        </div>

        {/* Coupon Code and Image */}
        <div className="mb-5">
          <p className="text-center text-gray-700 mb-3">
            Use code <span className="font-bold text-[#a7325ef2]">ESSAY20</span>{" "}
            for 20% off your order. Don’t miss out!
          </p>
          <div className="relative">
            <img
              src="/popup-img.jpg"
              alt="Special Offer"
              className="rounded-md w-full h-52 object-cover pattern-stripes"
            />
          </div>
        </div>

        {/* Call to Action Button */}
        <a
          href="/order"
          target="_blank"
          className="bg-[#a7325ef2] hover:bg-[#a7325ef2] text-white font-semibold py-3 px-4 rounded-full block text-center transition-transform duration-200 transform hover:scale-105 border-2 border-transparent hover:border-[#901945f2]"
        >
          Shop Now
        </a>
      </div>

      {/* CSS for Custom Animations and Patterns */}
      <style jsx>{`
        @keyframes popup {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-popup {
          animation: popup 0.4s ease-out;
        }
        .pattern-stripes {
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.3) 10px,
            rgba(255, 255, 255, 0.3) 20px
          );
        }
      `}</style>
    </div>
  );
};

export default Popup;
