import React from "react";

function Testimonial() {
  return (
    <>
      <section
        className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6 bg-gray-100"
        data-aos="fade-up"
      >
        <div className="w-full text-gray-800">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h1 className="text-5xl font-bold mb-5 text-black">
              Hear from Our Clients
            </h1>
            <h3 className="text-lg mb-5 font-light">
              Your success is our priority. Discover what students and
              professionals are saying about their experiences with our
              dedicated writing services.
            </h3>
            <div className="flex justify-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-[#a7325ef2]/70 mx-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-[#a7325ef2]/70 mx-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-[#a7325ef2]/70"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-[#a7325ef2]/70 mx-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-[#a7325ef2]/70 mx-1"></span>
            </div>
          </div>

          <div className="-mx-3 md:flex items-start gap-6">
            {/** Testimonial Item 1 */}
            <div className="px-3 md:w-1/3">
              <div
                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-6"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="flex items-center mb-4">
                  <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                    <img src="/testimonials/Jacob M.png" alt="Ava M." />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Jacob M
                    </h6>
                  </div>
                </div>
                <p className="text-sm leading-tight relative">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  I was thoroughly impressed by the detail and professionalism
                  displayed by craftessay.com. The essay was meticulously
                  organized, and the arguments were compelling. The writer's
                  profound understanding of the topic was evident in every
                  paragraph. I highly recommend their services!
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>

            {/** Testimonial Item 2 */}
            <div className="px-3 md:w-1/3">
              <div
                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-6"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="flex items-center mb-4">
                  <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                    <img src="/testimonials/Daniel H.png" alt="Daniel H." />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Daniel H
                    </h6>
                  </div>
                </div>
                <p className="text-sm leading-tight relative">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  The team at craftessay.com went above and beyond my
                  expectations! They produced an essay that was not only
                  expertly written but also insightful and engaging. The
                  customer support was exceptionally friendly and responsive,
                  ensuring a smooth experience from start to finish. I will
                  definitely be returning for more!
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>

            {/** Testimonial Item 3 */}
            <div className="px-3 md:w-1/3">
              <div
                className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mb-6"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="flex items-center mb-4">
                  <div className="overflow-hidden rounded-full w-12 h-12 bg-gray-50 border border-gray-200">
                    <img src="/testimonials/Emma W.png" alt="Emma W." />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Emma W
                    </h6>
                  </div>
                </div>
                <p className="text-sm leading-tight relative">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  I was extremely pleased with the service from craftessay.com.
                  The writer adhered to my guidelines meticulously, and the
                  essay quality was exceptional. Their reliability and fair
                  pricing truly stood out. I am thoroughly satisfied with my
                  experience!
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/** Add more testimonials as needed */}
        </div>
      </section>
    </>
  );
}

export default Testimonial;
