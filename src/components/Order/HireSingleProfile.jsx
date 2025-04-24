import React from "react";

function HireSingleProfile({ profile }) {
  return (
    <>
      <div className="bg-gray-100 rounded-[30px]">
        <div className="container mx-auto ">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 p-4">
            <>
              <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow p-6 rounded-[30px]">
                  <div className="flex flex-col items-center">
                    <img
                      src={profile.avatar}
                      className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    ></img>
                    <h1 className="text-xl font-bold">{profile.name}</h1>
                    <p className="text-gray-700">
                      {profile.popupinfo.designation}
                    </p>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Skills
                    </span>
                    <ul>
                      {profile.popupinfo.skills.map((item, index) => (
                        <li className="mb-2" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow p-6 rounded-[30px]">
                  <h2 className="text-xl font-bold mb-4">About</h2>
                  <p className="text-gray-700">{profile.popupinfo.about}</p>

                  <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                  {profile.popupinfo.experience.map((item, index) => (
                    <div key={index} className="mb-6">
                      <div className="flex justify-between flex-wrap gap-2 w-full">
                        <span className="text-gray-700 font-bold">
                          {item.title}
                        </span>
                      </div>
                      <p className="mt-2">{item?.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default HireSingleProfile;
