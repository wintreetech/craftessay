import React from "react";

function ServiceCard({ name, description, background, border, textcolor }) {
  return (
    <>
      <div className="relative">
        <span
          className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${background} rounded-lg`}
        ></span>
        <div
          className={`relative h-full p-5 bg-white border-2 ${border} rounded-lg `}
        >
          <div className="flex items-center -mt-1">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
              {name}
            </h3>
          </div>
          <p className={`mt-3 mb-1 text-xs font-medium ${textcolor} uppercase`}>
            ------------
          </p>
          <p className="mb-2 text-gray-600">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
