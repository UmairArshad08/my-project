import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:py-20 md:px-12 lg:px-24" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center pb-12">Contact</h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          <div className="flex-1 mb-12 lg:mb-0">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
              Let’s Talk
            </h3>
            <p className="text-xl mb-6">
              I am open to discussing web development projects or partnership opportunities.
            </p>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-green-400 mr-3" />
              <a href="mailto:youremail@example.com" className="hover:underline">
                umairarshad6697@gmail.com
              </a>
            </div>
            <div className="mb-4 flex items-center">
              <MdPhoneInTalk className="text-green-400 mr-3" />
              <span>+92 334-777-5040</span>
            </div>
            <div className="flex items-center">
              <ImLocation2 className="text-green-400 mr-3" />
              <span>Islamabad</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-lg shadow-lg p-6">
              <form>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2" htmlFor="fullname">
                    Full Name
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="flex-1 border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="flex-1 border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-white mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Enter your message..."
                    required
                    className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
