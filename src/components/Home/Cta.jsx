import React from "react";
import { Link } from "react-router-dom";

function Cta() {
  return (
    // <section
    //   className="flex border border-solid"
    //   style={{
    //     borderRadius: "30px 30px 0px 0px",
    //     backgroundImage:
    //       "radial-gradient(circle, rgba(255,200,100,1) 0%, rgba(255,240,220,1) 100%)", // Lighter gradient
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    //   data-aos="fade-up"
    // >
    //   <div className="flex justify-center items-center w-full py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    //     <div className="text-center space-y-5">
    //       <h2 className="text-base font-semibold text-white dark:text-pink-300 tracking-wide uppercase">
    //         Unleash Your Academic Potential
    //       </h2>
    //       <div className="inline-flex items-end justify-center w-full text-center mx-auto">
    //         <img
    //           src="https://cdn.devdojo.com/tails/avatars/024.jpg"
    //           className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
    //         />
    //         <img
    //           src="https://cdn.devdojo.com/tails/avatars/012.jpg"
    //           className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"
    //         />
    //         <img
    //           src="https://cdn.devdojo.com/tails/avatars/029.jpg"
    //           className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
    //         />
    //         <img
    //           src="https://cdn.devdojo.com/tails/avatars/005.jpg"
    //           className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"
    //         />
    //         <img
    //           src="https://cdn.devdojo.com/tails/avatars/032.jpg"
    //           className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"
    //         />
    //       </div>
    //       <p className="mt-1 text-4xl font-extrabold text-gray-900 max-w-[90%] m-auto sm:text-5xl sm:tracking-tight lg:text-6xl">
    //       Allow our professionals to write
    //         <span className="px-2 py-1 relative inline-block">
    //           <svg
    //             className="stroke-current bottom-0 absolute text-white -translate-x-2"
    //             viewBox="0 0 410 18"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602"
    //               strokeWidth={12}
    //               fill="none"
    //               fillRule="evenodd"
    //               strokeLinecap="round"
    //             />
    //           </svg>
    //           <span className="relative capitalize">
    //           an exceptional essay just for you.
    //           </span>
    //         </span>
    //       </p>
    //       <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-600 dark:text-gray-600">
    //         Take the next step and see your potential soar. Enjoy one week of
    //         complimentary access to our services and witness the difference.
    //       </p>
    //       <a
    //         href="/order"
    //         className="inline-block px-6 py-3 mt-8 bg-[#a7325ef2] dark:bg-[#a7325ef2] text-white font-semibold rounded hover:hover:bg-[#901945f2] dark:hover:bg-[#a7325ef2]"
    //         data-aos="zoom-in"
    //       >
    //         Claim Crafted Essay Now
    //       </a>
    //     </div>
    //   </div>
    // </section>

    <div className="bg-[#f7f7f7]">
      <div className="mx-auto py-16 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-24 text-center sm:rounded-3xl sm:px-16">
          <h2 className="font-nudge-extrabold mx-auto max-w-2xl text-3xl font-bold uppercase tracking-wide sm:text-4xl">
            Unleash Your Academic Potential
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Take the next step and see your potential soar. Enjoy one week of
            complimentary access to our services and witness the difference.
          </p>
          <div className="isolate mt-8 flex items-center justify-center -space-x-2 overflow-hidden">
            <img
              className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://cdn.devdojo.com/tails/avatars/024.jpg"
              alt="avatar-1"
            />
            <img
              className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://cdn.devdojo.com/tails/avatars/012.jpg"
              alt="avatar-2"
            />
            <img
              className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://cdn.devdojo.com/tails/avatars/029.jpg"
              alt="avatar-3"
            />
            <img
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://cdn.devdojo.com/tails/avatars/005.jpg"
              alt="avatar-4"
            />
            <img
              className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://cdn.devdojo.com/tails/avatars/032.jpg"
              alt="avatar-5"
            />
            <span className="!ml-2 font-bold italic text-[#a7325ef2]">
              Join these awesome members
            </span>
          </div>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a
              href="/order"
              className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-[#a7325ef2] px-6 py-4 font-semibold text-white shadow-sm hover:bg-[#901945f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Claim Crafted Essay Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="-mr-0.5 h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[72rem] w-[72rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            ></circle>
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#901945f2"></stop>
                <stop offset="1" stopColor="#901945f2"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Cta;
