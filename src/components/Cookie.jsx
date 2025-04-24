import React, { useEffect, useState } from "react";

function Cookie() {
  const COOKIE_CONSENT_KEY = "cookieConsent";
  const COOKIE_CONSENT_EXPIRY_KEY = "cookieConsentExpiry";
  const COOKIE_LIFETIME_MS = 24 * 60 * 60 * 1000; // 24 hours

  const [isBannerVisible, setIsBannerVisible] = useState(
    !localStorage.getItem(COOKIE_CONSENT_KEY) ||
      Date.now() > localStorage.getItem(COOKIE_CONSENT_EXPIRY_KEY)
  );

  useEffect(() => {
    // Check and clear expired cookie consent
    const consentExpiry = localStorage.getItem(COOKIE_CONSENT_EXPIRY_KEY);
    if (consentExpiry && Date.now() > consentExpiry) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      localStorage.removeItem(COOKIE_CONSENT_EXPIRY_KEY);
      setIsBannerVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(
      COOKIE_CONSENT_EXPIRY_KEY,
      Date.now() + COOKIE_LIFETIME_MS
    );
    setIsBannerVisible(false);
  };

  const handleDecline = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <>
      <div className="bg-gray-100">
        <div className="fixed bottom-0 left-0 right-0 w-full  bg-white border-t border-gray-200 shadow">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <p className="text-sm text-gray-700">
              We use cookies to ensure you get the best experience on our
              website
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleAccept}
                className="px-4 py-1.5 bg-[#901945f2] text-white rounded hover:bg-[#a7325ef2] transition duration-300 ease-in-out"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-1.5 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300 ease-in-out"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cookie;
