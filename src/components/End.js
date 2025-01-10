import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-2">© 2025 M Umair. All Rights Reserved.</p>

        <div className="flex justify-center space-x-6 ">
          <a
            href="https://www.linkedin.com"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-gray-400 hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
