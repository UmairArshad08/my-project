import React from "react";

const Contact = () => {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen px-4 sm:px-8">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6 text-white">
          Contact Us
        </h2>

        <form>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="fullname"
            >
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
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              required
              className="w-full border border-gray-700 rounded-lg px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message..."
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
  );
};

export default Contact;
