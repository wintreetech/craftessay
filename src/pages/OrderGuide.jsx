import React from "react";
import { Teams, OrderSteps, Statistics, Hero } from "../components";
import { Link } from "react-router-dom";

function OrderGuide() {
  return (
    <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
      <Hero
        subheading={"Seamless Ordering Experience"}
        heading={"Simple Steps to Success"}
        description={
          "Discover a smooth experience: review our offerings, customize your order, and allow our team to deliver top-notch quality."
        }
        buttontext={"Rise Higher with Our Skilled Writers"}
        buttonURL={"#steps"}
      />
      {/* <Statistics /> */}

      <div
        id="steps"
        className="relative min-h-screen py-10 lg:py-16 xl:py-20 flex flex-col justify-center items-center overflow-hidden"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="text-3xl font-bold tracking-tight  text-gray-900 sm:text-4xl">
          Streamlined Order Process: From Inquiry to Completion
        </h2>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#a7325ef2] text-slate-500 group-[.is-active]:text-teal-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                    >
                      <path
                        fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                      />
                    </svg>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#a7325ef2]/95 p-4 rounded border border-teal-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-[20px] text-white">
                        Exploration Phase
                      </div>
                    </div>
                    <div className="text-white">
                      <li className="mb-2">
                        Customers visit our website to explore our services and
                        offerings.
                      </li>

                      <li>
                        They review sample essays and testimonials to gauge our
                        quality and reliability.
                      </li>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#a7325ef2] text-slate-500 group-[.is-active]:text-teal-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                    >
                      <path
                        fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                      />
                    </svg>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#a7325ef2]/95 p-4 rounded border border-slate-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-[20px] text-white">
                        Order Initiation
                      </div>
                    </div>
                    <div className="text-white">
                      <li className="mb-2">
                        Customers start by filling out our user-friendly order
                        form.
                      </li>

                      <li>
                        They provide detailed instructions, including the topic,
                        required level of detail, word count, and deadline.
                      </li>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#a7325ef2] text-slate-500 group-[.is-active]:text-teal-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                    >
                      <path
                        fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                      />
                    </svg>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#a7325ef2]/95 p-4 rounded border border-slate-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-[20px] text-white">
                        Writer Selection
                      </div>
                    </div>
                    <div className="text-white">
                      <li className="mb-2">
                        Customers browse through our pool of skilled writers,
                        reviewing profiles and client feedback.
                      </li>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#a7325ef2] text-slate-500 group-[.is-active]:text-teal-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                    >
                      <path
                        fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                      />
                    </svg>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#a7325ef2]/95 p-4 rounded border border-slate-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-[20px] text-white">
                        Progress Tracking
                      </div>
                    </div>
                    <div className="text-white">
                      <li className="mb-2">
                        Customers can track the progress of their essay through
                        our platform.
                      </li>

                      <li>
                        They communicate directly with the writer, providing
                        additional instructions or requesting drafts.
                      </li>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#a7325ef2] text-slate-500 group-[.is-active]:text-teal-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                    >
                      <path
                        fillRule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                      />
                    </svg>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#a7325ef2]/95 p-4 rounded border border-slate-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-[20px] text-white">
                        Review and Revision:
                      </div>
                    </div>
                    <div className="text-white">
                      <li className="mb-2">
                        Upon completion, customers receive a notification to
                        download the finished essay.
                      </li>

                      <li>
                        They review the essay carefully and request revisions if
                        needed.
                      </li>
                    </div>
                  </div>
                </div>

                <div
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-center"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#a7325ef2] text-slate-500 group-[.is-active]:text-teal-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                    >
                      <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                    </svg>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#a7325ef2]/95 p-4 rounded border border-slate-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-[20px] text-white">
                        Completion & Satisfaction
                      </div>
                    </div>
                    <div className="text-white">
                      <li className="mb-2">
                        Once satisfied, customers approve the essay and finalize
                        the order.
                      </li>

                      <li>
                        They provide feedback on their experience, helping us
                        improve our services.
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderSteps />

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 relative py-10 lg:py-16 xl:py-20">
        <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:rounded-3xl sm:border-2 sm:border-gray-100 sm:px-16 sm:shadow-sm">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Take Your Writing to the Next Level
          </h2>

          <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Elevate your writing game with our tailored services. From essays to
            research papers, we've got you covered. Experience efficiency,
            precision, and satisfaction with every order.
          </h3>

          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              to={"/order"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#a7325ef2] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#901945f2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Order Your Assignment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>

          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#gradient)"
              fillOpacity="0.5"
            ></circle>
            <defs>
              <radialGradient id="gradient">
                <stop offset="0%" stopColor="#a7f3d0" />
                <stop offset="100%" stopColor="#10b981" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default OrderGuide;
