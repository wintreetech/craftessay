import React from "react";
import { services } from "../../content/Content";

function Features() {
  return (
    <>
      <section
        className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
      >
        <div className="container">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white">
            Discover Our <br /> Exceptional{" "}
            <span className="underline decoration-[#a7325ef2]">Services</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Our wide range of services is designed to support your success,
            offering personalized assistance every step of the way.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item, index) => (
              <div
                key={index}
                className="rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <div className="mx-auto mb-7 inline-block">
                  <item.icon size={50} color="#a7325ef2" />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                    {item.name}
                  </h3>
                  <p className="text-base font-medium text-body-color">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
