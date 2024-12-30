import React from "react";
import Profile from "../components/profile.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={Profile}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate frontend developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in frontend technologies, I strive to create seamless and
              efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 md:w-2/12 text-sm md:text-base">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="tailwind" className="w-3/12 md:w-2/12 text-sm md:text-base">
                  Tailwind.CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="reactjs" className="w-3/12 md:w-2/12 text-sm md:text-base">
                  React.js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              1+
            </h3>
            <p className="text-lg md:text-xl">Year Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              45+
            </h3>
            <p className="text-lg md:text-xl">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              10+
            </h3>
            <p className="text-lg md:text-xl">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
