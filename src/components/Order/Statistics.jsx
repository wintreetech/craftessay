import React from "react";

function Statistics() {
  return (
    <>
      <div
        className="relative py-10 lg:py-16 xl:py-20"
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Experience our essay writing platform:
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Unlock academic success with our essay writing platform. Benefit
              from our high engagement rates and comprehensive analytics suite
              for optimal progress monitoring
            </p>
          </div>
        </div>
        <div className="mt-10 pb-1">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 "></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Satisfied clients
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      500+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Response rate
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      58%
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      New devs a month
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      30+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
