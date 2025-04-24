import React from "react";
import { HomeBenefits } from "../../content/Content";

function Benefits() {
  return (
    <>
      <section
        className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[650px]">
                <h2
                  className="
                  underline
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Services: Tailored Solutions for Your Writing Needs
                </h2>
                <p className="text-base text-body-color">
                  We provide a wide array of services to support all your
                  academic writing requirements. From students facing complex
                  assignments to professionals needing help with research
                  papers, craftessay is here to assist you every step of the
                  way.
                </p>
              </div>
            </div>
          </div>

          <div className="container mx-auto bg-white">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {HomeBenefits.map((item, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl ${item.bgcolor} p-4 lg:p-12`}
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <div className={`flex items-center ${item.textcolor}`}>
                    <p
                      className="text-sm font-bold uppercase"
                      data-aos="fade-right"
                    >
                      {item.name}
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      data-aos="fade-up-right"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  <h2
                    className="mt-4 text-3xl font-semibold text-slate-800"
                    data-aos="fade-right"
                  >
                    {item.name}
                  </h2>

                  <p
                    className="mt-4 text-lg text-slate-600"
                    data-aos="fade-right"
                  >
                    {item.description}
                  </p>

                  <div className="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125">
                    <img src={item.image} alt="" className="h-full w-[300px]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Benefits;
