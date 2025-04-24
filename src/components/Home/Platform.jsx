import React from "react";
import { platformcontent } from "../../content/Content";

function Platform() {
  return (
    <section className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#a7325ef2]">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            One-Stop Platform
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Writing an essay has never been simpler! Our complete essay writing service is designed to guide you through every step of the process. Here's how we can assist you:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {platformcontent.map((item, index) => (
            <div
              key={index}
              className="relative p-6 border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <dt className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#901945f2] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="font-semibold text-gray-900">{item.title}</span>
              </dt>
              <dd className="mt-2 text-base text-gray-600">{item.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Platform;