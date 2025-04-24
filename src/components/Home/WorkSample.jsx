import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { sampleContent } from "../../content/Content";
import { MdChevronRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import HireSingleProfile from "../Order/HireSingleProfile";

function WorkSample() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (profile) => {
    setSelectedProfile(profile);
    setIsOpen(true);
  };

  return (
    <>
      <section
        className="relative py-10 lg:py-16 xl:py-20 max-w-7xl mx-auto px-4 sm:px-6"
        data-aos="fade-up"
      >
        <div className="text-center max-w-2xl m-auto ">
          <h2 className="text-5xl text-gray-950 font-semibold">
            Introducing Our Talented
            <br />
            Essay Writers
          </h2>
          <p className="mt-6 text-gray-700 ">
            Explore a curated team of top-tier essay writers, carefully selected
            for their exceptional skills, academic prowess, and commitment to
            delivering outstanding content that meets your highest standards.
            track record in delivering top-notch academic content.
          </p>
        </div>

        <Swiper
          className="mt-10"
          spaceBetween={20}
          slidesPerView="auto"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {sampleContent.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200">
                <div
                  aria-hidden="true"
                  className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b ${item.color} to-white blur-2xl opacity-25`}
                ></div>
                <div className="relative">
                  <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg before:rounded-[7px]dar before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100  before:bg-gradient-to-b  before:shadow ">
                    <img src={item.avatar} className="!w-10 !h-10 rounded-xl" />
                  </div>

                  <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                    <h2 className="font-medium text-[20px] mb-2">
                      {item.name}
                    </h2>
                    <p className="text-gray-700 mb-2">{item.profile}</p>
                    <p className="text-gray-700 ">{item.description}</p>
                  </div>

                  <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 ">
                    <Link
                      onClick={() => handleButtonClick(item)}
                      to="#"
                      className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100  disabled:dark:bg-gray-900  text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                    >
                      <span>View Profile</span>
                      <MdChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {selectedProfile && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="relative w-full h-[600px] max-w-5xl overflow-y-auto bg-white border p-12">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-[#a7325ef2]/95 text-white rounded-full p-2"
              >
                <IoClose />
              </button>
              <DialogPanel className="space-y-4 relative">
                <HireSingleProfile profile={selectedProfile} />
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}

export default WorkSample;
