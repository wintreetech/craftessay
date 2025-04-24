import React from "react";
import { logo } from "../assets/index";
import { Link } from "react-router-dom";
import visa from "../assets/visa-master.png";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to={"/"}>
              <img src={logo} className="h-6 sm:h-14" alt="logo" />
            </Link>
            <p className="max-w-xs mt-4 text-lg font-bold text-gray-600">
              BEZAMICON LTD
            </p>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Unlock your potential with customized essays for top results.
            </p>
            <p className="max-w-xs mt-4 font-medium text-sm text-black">
              Our Social Handle
            </p>

            <div className="flex mt-6  space-x-6 text-gray-600">
              <a
                href="https://www.facebook.com/profile.php?id=61566978513226"
                className="hover:opacity-75"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/craftessay/?next=%2F"
                className="hover:opacity-75"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-500">
                <Link to={"/pricing"} className="hover:opacity-75">
                  Pricing
                </Link>
                <Link to={"/about"} className="hover:opacity-75">
                  About
                </Link>
                <Link to={"/orderguide"} className="hover:opacity-75">
                  Order
                </Link>
                <Link to={"/services"} className="hover:opacity-75">
                  Services
                </Link>
              </nav>
            </div>
            {/* <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-base text-gray-500">
                <a className="hover:opacity-75">Essay Writing</a>
                <a className="hover:opacity-75">Research Paper Writing</a>
                <a className="hover:opacity-75">Final Draft Help</a>
                <a className="hover:opacity-75">Editing and Proofreading</a>
                <a className="hover:opacity-75">Plagiarism Checking</a>
              </nav>
            </div> */}
            <div>
              <p className="font-medium">Company Info</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a href="#" className="hover:opacity-75">
                  Address :- The Watermark 9-15 Ribbleton Lane, Preston,
                  Lancashire, United Kingdom PR1 5EZ
                </a>
                <p>Registration Number :- 15727670</p>
                <p>Working Hours :- 9am CET to 6pm CET</p>
                <a
                  href="mailto:support@craftessay.com"
                  className="hover:opacity-75"
                >
                  Email :- support@craftessay.com
                </a>
                <a href="+44 1253260284" className="hover:opacity-75">
                  Phone :- +44 1253260284
                </a>
                <img src={visa} className="w-full" />
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a
                  href="/order/privacy-policy/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  Privacy Policy
                </a>
                <a
                  href="/order/terms-condition/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  href="/order/cancellation-policy/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  Cancellation policy
                </a>
                <a
                  href="/order/delivery-policy/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  Delivery Policy
                </a>
                <a
                  href="/order/refund-policy/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  Refund Policy
                </a>
                <a
                  href="/order/payment-method/"
                  target="_blank"
                  className="hover:opacity-75"
                >
                  Payment Method
                </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">
          © {year} craftessay.com Powered by craftessay
        </p>
      </div>
    </footer>
  );
}

export default Footer;
