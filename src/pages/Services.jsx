import React from "react";
import { Hero } from "../components";
import { featuresSidebar } from "../assets";
import ServiceCard from "../components/Services/ServiceCard";
import {
  FaqContent,
  businessContent,
  sampleContent,
  serviceFeatures,
  services,
  teams,
} from "../content/Content";

function Services() {
  const heroContent = {
    subheading: "Our Offerings",
    heading: "Discover Our Top-Tier Solutions",
    description:
      "Boost your success with our skilled writing services. Personalized essays, crafted with precision and guaranteed quality.",
    buttontext: "Explore Our Services",
    buttonURL: "#showservice",
  };

  return (
    <>
      <section className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
        <Hero
          subheading={heroContent.subheading}
          heading={heroContent.heading}
          description={heroContent.description}
          buttontext={heroContent.buttontext}
          buttonURL={heroContent.buttonURL}
          showbutton1={heroContent.showbutton1}
        />

        {/* Benefits and Services Section */}

        {/* <div
          id="services"
          className="container flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 relative py-10 lg:py-16 xl:py-20"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="flex flex-col w-full mb-10 sm:flex-row gap-10">
            <div className="w-full sm:mb-0 sm:w-1/2">
              <ServiceCard
                name={services[0].name}
                description={services[0].description}
                background="bg-indigo-500"
                border="border-indigo-500"
                textcolor="text-indigo-500"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <ServiceCard
                name={services[1].name}
                description={services[1].description}
                background="bg-purple-500"
                border="border-purple-500"
                textcolor="text-purple-500"
              />
            </div>
          </div>
          <div className="flex flex-col w-full sm:flex-row gap-10">
            <div className="w-full sm:mb-0 sm:w-1/2">
              <ServiceCard
                name={services[2].name}
                description={services[2].description}
                background="bg-blue-400"
                border="border-blue-400"
                textcolor="text-blue-500"
              />
            </div>
            <div className="w-full sm:mb-0 sm:w-1/2">
              <ServiceCard
                name={services[3].name}
                description={services[3].description}
                background="bg-yellow-400"
                border="border-yellow-400"
                textcolor="text-yellow-400"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <ServiceCard
                name={services[4].name}
                description={services[4].description}
                background="bg-green-500"
                border="border-green-500"
                textcolor="text-green-500"
              />
            </div>
          </div>
        </div> */}

        {/* Features Section */}

        <div
          id="showservice"
          className="container space-y-6 py-8 md:py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-2xl md:text-4xl">
              Professional Writing Services
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our comprehensive suite of services ensures your success, offering
              tailored assistance at every stage of your project.
            </p>
          </div>

          <div className="grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            {serviceFeatures.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
              >
                <div className="flex h-[160px] flex-col gap-6 rounded-md p-6">
                  <img src={item.icon} alt="" className="w-8 h-8" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* service Section */}
        {/* 
        <div
          className="text-gray-600 relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="container flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-contain object-center h-full w-full"
                src={featuresSidebar}
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              {businessContent.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col mb-10 lg:items-start items-center"
                >
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                    <img src={item.icon} alt="" className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/*  Team Section */}
        {/* <div
          className="max-w-7xl mx-auto px-4 sm:px-6 relative py-10 lg:py-16 xl:py-20"
          data-aos="zoom-out-down"
        >
          <div className="container">
            <h1 className="text-3xl font-bold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Essay Writing Expert Team
            </h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
              Our Essay Writing Expert Team comprises seasoned professionals
              dedicated to crafting high-quality essays tailored to your
              specific academic needs.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              {sampleContent.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-blue-100 rounded-xl"
                >
                  <img
                    className="object-cover w-32 h-32 rounded-full "
                    src={item.avatar}
                    alt="/"
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                    {item.name}
                  </h1>

                  <p className="mt-2 text-black text-center capitalize ">
                    {item.profile}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* FAQ Section */}

        <div className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <h4 className="text-4xl font-bold text-gray-800 text-center mb-10">
            Inquire, Explore, Simplify: Your FAQ Guide
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12">
            {FaqContent.map((item, index) => (
              <div
                key={index}
                className="flex space-x-4 mt-8 items-start justify-end"
              >
                <h3 className="text-[18px]">{index + 1}</h3>
                <div>
                  <h4 className="text-xl font-bold text-gray-700">
                    {item.question}
                  </h4>
                  <p className="text-gray-600 my-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
