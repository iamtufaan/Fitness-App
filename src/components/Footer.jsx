import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto p-8 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <img src="/public/logo.webp" className="w-20" alt="Logo" />
          <p className="text-gray-300 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            veritatis nihil quam distinctio esse amet recusandae quod atque
            repellat illum.
          </p>
          <div className="flex flex-col gap-3 mt-5 text-gray-300 text-sm">
            <p className="flex items-center gap-3 group">
              <i className="fa-solid fa-location-dot text-orange-600"></i>
              123 Main Road, Surat, Gujarat, INDIA
            </p>
            <p className="flex items-center gap-3 group">
              <i className="fa-solid fa-envelope-open-text text-orange-600"></i>
              example@gmail.com
            </p>
            <p className="flex items-center gap-3 group">
              <i className="fa-solid fa-phone text-orange-600"></i>
              +91 9876543219
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-start md:w-1/3">
          <h1 className="font-bold text-lg mb-4">Services</h1>
          <ul className=" text-gray-300">
            <li className="hover:text-orange-500 py-2 transition">Strength Training</li>
            <li className="hover:text-orange-500 py-2 transition">Yoga Session</li>
            <li className="hover:text-orange-500 py-2 transition">Deadlift Challenge</li>
            <li className="hover:text-orange-500 py-2 transition">Squats Challenge</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start md:w-1/3">
          <h1 className="font-bold text-lg mb-4">Quick Links</h1>
          <ul className=" flex flex-col">
            <a
              className="hover:bg-slate-600 hover:px-4 py-2 rounded-md font-bold transition hover:text-white"
              href="#home"
            >
              Home
            </a>
            <a
              className="hover:bg-slate-600 hover:px-4 py-2 rounded-md font-bold transition hover:text-white"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:bg-slate-600 hover:px-4 py-2 rounded-md font-bold transition hover:text-white"
              href="#price"
            >
              Pricing Plan
            </a>
            <a
              className="hover:bg-slate-600 hover:px-4 py-2 rounded-md font-bold transition hover:text-white"
              href="#contact"
            >
              Contact
            </a>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-gray-400 text-sm">
        © 2024 Your Company. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
