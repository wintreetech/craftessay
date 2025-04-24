// import React from "react";
import { useRef } from "react";
import { Hero } from "../components";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const formRef = useRef();

  const handleEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log(formRef.current);

    emailjs
      .sendForm("service_0m4hv8a", "template_e2pamlh", formRef.current, {
        publicKey: "2-7uGPKFPIZVqTEAg",
      })
      .then(
        () => {
          alert("Thank You! Your message has been sent successfully.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="pt-[3.75rem] lg:pt-[4.25rem] overflow-hidden">
        <Hero
          subheading={"Help Desk"}
          heading={"Contact Us"}
          description={"We'd Love to Hear from You"}
          buttonURL={"#learnmore"}
          buttontext={"Visit Now"}
        />
      </div>
      <div id="learnmore" className="py-10 lg:py-16 xl:py-20">
        <div className="container mx-auto py-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <p className="text- font-semibold text-gray-900 mb-4">
                  Note :- We're committed to fast, reliable responses! All your
                  queries will be answered within 24 hours.
                </p>

                <form
                  className="bg-white rounded-lg px-6 py-8 shadow-md"
                  onSubmit={handleEmail}
                  ref={formRef}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="from_name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="from_email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      rows={6}
                      placeholder="Enter your message"
                      required
                      name="message"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-[#a7325ef2] hover:hover:bg-[#901945f2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Info Column */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Contact Information
                </h3>
                <p className="mb-2">
                  <strong>Email:</strong> support@craftessay.com
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +44 1253260284
                </p>
                <p className="mb-2">
                  <strong>Working Hours:</strong> 9am CET to 6pm CET
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> The Watermark 9-15 Ribbleton Lane, Preston, Lancashire, United Kingdom PR1 5EZ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
