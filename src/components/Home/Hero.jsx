import React from "react";

function Hero({ subheading, heading, description, buttontext, buttonURL }) {
  return (
    <>
      <div className="absolute inset-x-0 top-[36%] -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg
          className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
              width="200"
              height="200"
              x="50%"
              y="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(-100 0)"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
            <path
              d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
              strokeWidth="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
          ></rect>
        </svg>
      </div>
      <div className="relative py-10 lg:py-16 xl:py-40 bg-hero">
        <div className="mx-auto max-w-[52rem] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              aria-hidden="true"
              className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-30"
            >
              <div className="blur-[106px] h-56 bg-gradient-to-br from-yellow-300 to-yellow-600" />
              <div className="blur-[106px] h-32 bg-gradient-to-r from-yellow-200 to-yellow-500" />
            </div>
            <p
              className="text-lg font-medium leading-8 text-[#a7325ef2]/95"
              data-aos="fade-up"
            >
              {subheading}
            </p>
            <h1
              className="mt-3 text-[4.5rem] font-bold leading-[5rem] tracking-tight text-black"
              data-aos="fade-up"
            >
              {heading.split("\n").map((line, index) => (
                <p key={index} data-aos="fade-up">
                  {line}
                </p>
              ))}
            </h1>
            <p
              className="mt-3 text-lg leading-relaxed text-gray-600"
              data-aos="fade-up"
            >
              {description}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={buttonURL}
              className="transform rounded-md bg-[#a7325ef2]/95 px-5 py-3 font-medium text-white transition-colors hover:bg-[#901945f2]"
              data-aos="zoom-in"
            >
              {buttontext}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
