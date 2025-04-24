import React from "react";
import { Hero } from "../components";
import { FaqContent } from "../content/Content";
import { Pricing as PricingPage } from "../components";

function Pricing() {
  return (
    <>
      <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
        <Hero
          subheading={"Our Pricing Plans"}
          heading={"Flexible Pricing Options to Suit Your Needs"}
          description={
            "Choose from our flexible pricing plans for custom essays. Transparent pricing, no hidden costs."
          }
          buttontext={"Get Started"}
          buttonURL={"/order"}
          showbutton1={true}
        />

        <PricingPage />

        <div
          className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6"
          data-aos="fade-down"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 h-full w-full m-auto grid grid-cols-2 -space-x-40 opacity-20"
          >
            <div className="blur-[106px] h-96 bg-gradient-to-br from-purple-300 via-indigo-300 to-pink-300 opacity-30" />
            <div className="blur-[106px] h-80 bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 opacity-30" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="md:w-2/3 lg:w-1/2 text-black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99995 4.5C9.16291 4.50003 9.32143 4.55315 9.45152 4.6513C9.58161 4.74945 9.67619 4.8873 9.72095 5.044L10.5339 7.89C10.709 8.50292 11.0374 9.0611 11.4881 9.51183C11.9388 9.96255 12.497 10.291 13.1099 10.466L15.9559 11.279C16.1125 11.3239 16.2503 11.4185 16.3483 11.5486C16.4464 11.6786 16.4994 11.8371 16.4994 12C16.4994 12.1629 16.4464 12.3214 16.3483 12.4514C16.2503 12.5815 16.1125 12.6761 15.9559 12.721L13.1099 13.534C12.497 13.709 11.9388 14.0374 11.4881 14.4882C11.0374 14.9389 10.709 15.4971 10.5339 16.11L9.72095 18.956C9.67609 19.1126 9.58147 19.2503 9.45139 19.3484C9.32131 19.4464 9.16284 19.4995 8.99995 19.4995C8.83705 19.4995 8.67859 19.4464 8.54851 19.3484C8.41843 19.2503 8.32381 19.1126 8.27895 18.956L7.46595 16.11C7.2909 15.4971 6.9625 14.9389 6.51178 14.4882C6.06105 14.0374 5.50287 13.709 4.88995 13.534L2.04395 12.721C1.88735 12.6761 1.74962 12.5815 1.65157 12.4514C1.55352 12.3214 1.50049 12.1629 1.50049 12C1.50049 11.8371 1.55352 11.6786 1.65157 11.5486C1.74962 11.4185 1.88735 11.3239 2.04395 11.279L4.88995 10.466C5.50287 10.291 6.06105 9.96255 6.51178 9.51183C6.9625 9.0611 7.2909 8.50292 7.46595 7.89L8.27895 5.044C8.32371 4.8873 8.41829 4.74945 8.54838 4.6513C8.67847 4.55315 8.83698 4.50003 8.99995 4.5ZM17.9999 1.5C18.1673 1.49991 18.3298 1.55576 18.4617 1.65869C18.5936 1.76161 18.6873 1.90569 18.7279 2.068L18.9859 3.104C19.2219 4.044 19.9559 4.778 20.8959 5.014L21.9319 5.272C22.0946 5.31228 22.239 5.40586 22.3423 5.5378C22.4455 5.66974 22.5016 5.83246 22.5016 6C22.5016 6.16754 22.4455 6.33026 22.3423 6.4622C22.239 6.59414 22.0946 6.68772 21.9319 6.728L20.8959 6.986C19.9559 7.222 19.2219 7.956 18.9859 8.896L18.7279 9.932C18.6877 10.0946 18.5941 10.2391 18.4621 10.3423C18.3302 10.4456 18.1675 10.5017 17.9999 10.5017C17.8324 10.5017 17.6697 10.4456 17.5377 10.3423C17.4058 10.2391 17.3122 10.0946 17.2719 9.932L17.0139 8.896C16.8986 8.43443 16.6599 8.0129 16.3235 7.67648C15.987 7.34005 15.5655 7.10139 15.1039 6.986L14.0679 6.728C13.9053 6.68772 13.7609 6.59414 13.6576 6.4622C13.5544 6.33026 13.4983 6.16754 13.4983 6C13.4983 5.83246 13.5544 5.66974 13.6576 5.5378C13.7609 5.40586 13.9053 5.31228 14.0679 5.272L15.1039 5.014C15.5655 4.89861 15.987 4.65995 16.3235 4.32352C16.6599 3.9871 16.8986 3.56557 17.0139 3.104L17.2719 2.068C17.3125 1.90569 17.4063 1.76161 17.5382 1.65869C17.6701 1.55576 17.8326 1.49991 17.9999 1.5ZM16.4999 15C16.6575 14.9999 16.811 15.0494 16.9388 15.1415C17.0666 15.2336 17.1622 15.3636 17.2119 15.513L17.6059 16.696C17.7559 17.143 18.1059 17.495 18.5539 17.644L19.7369 18.039C19.8859 18.089 20.0154 18.1845 20.1071 18.3121C20.1989 18.4397 20.2482 18.5929 20.2482 18.75C20.2482 18.9071 20.1989 19.0603 20.1071 19.1879C20.0154 19.3155 19.8859 19.411 19.7369 19.461L18.5539 19.856C18.1069 20.006 17.7549 20.356 17.6059 20.804L17.2109 21.987C17.1609 22.136 17.0654 22.2655 16.9378 22.3572C16.8103 22.4489 16.6571 22.4983 16.4999 22.4983C16.3428 22.4983 16.1896 22.4489 16.0621 22.3572C15.9345 22.2655 15.839 22.136 15.7889 21.987L15.3939 20.804C15.3203 20.5833 15.1963 20.3827 15.0318 20.2182C14.8672 20.0537 14.6667 19.9297 14.4459 19.856L13.2629 19.461C13.114 19.411 12.9845 19.3155 12.8927 19.1879C12.801 19.0603 12.7516 18.9071 12.7516 18.75C12.7516 18.5929 12.801 18.4397 12.8927 18.3121C12.9845 18.1845 13.114 18.089 13.2629 18.039L14.4459 17.644C14.8929 17.494 15.2449 17.144 15.3939 16.696L15.7889 15.513C15.8387 15.3637 15.9341 15.2339 16.0617 15.1418C16.1893 15.0497 16.3426 15.0001 16.4999 15Z"
                  fill="#EA580C"
                  fill-opacity="0.94902"
                />
              </svg>

              <h2 className="my-8 text-3xl font-bold text-[#a7325ef2]/95 underline md:text-5xl">
                Our Promise to You
              </h2>
              <p className="text-gray-800">
                Discover unparalleled quality, swift deliveries, and skilled
                insights across diverse fields, all backed by our unwavering
                commitment to customer satisfaction and trust.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                <div className="relative py-12 px-8 text-center">
                  <img
                    src="https://www.svgrepo.com/show/164986/logo.svg"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="mx-auto mb-6 w-16 h-16 rounded-full bg-gray-700 p-2"
                    style={{ color: "transparent" }}
                  />
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Quality Assurance
                  </h5>
                  <p className="text-gray-300 mt-2">
                    Consistently providing exceptional papers, backed by an
                    impressive 8.5/10 customer satisfaction rating.
                  </p>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                <div className="relative py-12 px-8 text-center">
                  <img
                    src="https://www.svgrepo.com/show/120853/logo.svg"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="mx-auto mb-6 w-16 h-16 rounded-full bg-gray-700 p-2"
                    style={{ color: "transparent" }}
                  />
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Timely Deliveries
                  </h5>
                  <p className="text-gray-300 mt-2">
                    Ensuring punctuality is our forte, with 98.41% of orders
                    arriving promptly as promised.
                  </p>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                <div className="relative py-12 px-8 text-center">
                  <img
                    src="https://www.svgrepo.com/show/120852/logo.svg"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="mx-auto mb-6 w-16 h-16 rounded-full bg-gray-700 p-2"
                    style={{ color: "transparent" }}
                  />
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Diverse Skills
                  </h5>
                  <p className="text-gray-300 mt-2">
                    Access a vast pool of specialists covering over 80
                    disciplines, guaranteeing proficiency in every subject area.
                  </p>
                </div>
              </div>
              <div className="group relative bg-gray-800 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
                <div className="relative py-12 px-8 text-center">
                  <img
                    src="https://www.svgrepo.com/show/120850/logo.svg"
                    loading="lazy"
                    width={100}
                    height={100}
                    className="mx-auto mb-6 w-16 h-16 rounded-full bg-gray-700 p-2"
                    style={{ color: "transparent" }}
                  />
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Customer Support
                  </h5>
                  <p className="text-gray-300 mt-2">
                    Rest assured knowing our dedicated team is always available
                    to address any concerns or queries, ensuring your
                    satisfaction throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6"
          data-aos="fade-down"
        >
          <div className="flex flex-col max-w-6xl mx-auto md:flex-row">
            <h2 className="w-full pb-6 mr-8 text-3xl font-extrabold leading-9 md:w-1/3">
              Frequently-asked questions
            </h2>
            <dl className="w-full md:w-2/3">
              {FaqContent.map((item, index) => (
                <div key={index}>
                  <dt className="mb-4">
                    <h3 className="text-xl font-semibold">{item.question}</h3>
                  </dt>
                  <dd className="mb-16">
                    <p>{item.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
