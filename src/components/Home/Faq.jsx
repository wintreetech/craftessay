import React from "react";
import { FaqContent } from "../../content/Content";

function Faq() {
  return (
    <>
      <section
        className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
      >
        <h4 className="text-4xl font-bold text-gray-800 uppercase text-center">
          FAQ
        </h4>
        <p className="text-center text-gray-600 text-sm my-4">
          Here are some of the frequently asked questions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12">
          {FaqContent.map((item, index) => (
            <div key={index} className="flex space-x-8 mt-8">
              <div>{index + 1}</div>
              <div>
                <h4 className="text-xl font-bold text-gray-700">
                  {item.question}
                </h4>
                <p className="text-gray-600 my-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq;
