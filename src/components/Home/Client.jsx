import React from "react";
import {
  AiFillBuild,
  AiFillGolden,
  AiFillOpenAI,
  AiFillHourglass,
  AiFillHeart,
  AiFillFunnelPlot,
} from "react-icons/ai";

function Client() {
  return (
    <section
      className="relative py-10 lg:py-16 xl:py-20 bg-gray-50"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span className="text-[#a7325ef2] font-medium mb-4 block">
            Say Goodbye to Essay Writing Stress
          </span>
          <h1 className="text-4xl underline text-gray-900 font-bold">
            How CraftEssay Can Assist You
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              icon: <AiFillBuild size={40} className="mb-5 text-primary" />,
              title: "Priority Project Handling",
              description:
                "Accelerated delivery options tailored to your timeline. Choose the turnaround speed that fits your schedule — we keep things moving when time is critical.",
            },
            {
              icon: <AiFillGolden size={40} className="mb-5 text-primary" />,
              title: "Lack of Topic Ideas",
              description:
                "A wide range of topic suggestions is available. You can also request custom topic suggestions based on specific requirements. Our writers will create unique and engaging topics for you.",
            },
            {
              icon: <AiFillOpenAI size={40} className="mb-5 text-primary" />,
              title: "Research Challenges",
              description:
                "Access a wide range of reliable resources. Our researchers will conduct thorough and relevant research tailored to your needs. You can also request summaries or detailed reports based on your project requirements.",
            },
            {
              icon: (
                <AiFillFunnelPlot size={40} className="mb-5 text-primary" />
              ),
              title: "Customer Support",
              description:
                "At CraftEssay, we offer 24/7 customer support to address any queries or concerns. Our dedicated team will assist with order tracking, issue resolution, and more.",
            },
            {
              icon: <AiFillHourglass size={40} className="mb-5 text-primary" />,
              title: "Writer's Block",
              description:
                "Our writers are experienced in overcoming writer's block. We provide personalized writing assistance and guidance, including brainstorming sessions to inspire your work.",
            },
            {
              icon: <AiFillHeart size={40} className="mb-5 text-primary" />,
              title: "Quality Concerns",
              description:
                "Our team of skilled editors and proofreaders ensures high-quality essays. You can request revisions or amendments until you are completely satisfied. We guarantee original, plagiarism-free content.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 shadow-lg flex flex-col rounded-2xl transition-transform transform hover:scale-105"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="flex items-start mb-4">
                {item.icon}
                <h2 className="text-[20px] font-bold text-left ml-4">
                  {item.title}
                </h2>
              </div>
              <p className="text-[14px] text-left text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;
