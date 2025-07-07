import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          {/* Logo & Social */}
          <div>
            <img src="/logo-brand.png" alt="Colonel's Academy" className="w-15 mb-4" />
            <div className="flex gap-6">
              <a href="#" className="bg-white text-[#002147] p-2 rounded">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white text-[#002147] p-2 rounded">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white text-[#002147] p-2 rounded">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Our Links 1 */}
          <div>
            <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl font-semibold mb-5">Our Links</h3>
            <ul className="space-y-2 text-xl sm:text-xl md:text-xl lg:text-xl">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">Achievements</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

          {/* Our Links 2 */}
          <div>
            <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl font-semibold mb-5">Our Links</h3>
            <ul className="space-y-2 text-xl sm:text-xl md:text-xl lg:text-xl">
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Our School</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl sm:text-xl md:text-xl lg:text-xl font-semibold mb-3">Contact</h3>
            <ul className="space-y-4 text-xl sm:text-xl md:text-xl lg:text-xl">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="mt-2" />
                <span>+91 94259 65753, +91 99811 15313</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-2" />
                <span>info@colonelsacademy.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-3" />
                <span>51, Silver Oaks Estate, Bercha Road, Mhow Dist., Indore</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-4 pb-6 text-sm text-center md:text-left md:flex justify-between">
          <p>Copyright © Colonels Academy 2025. All rights reserved.</p>
          <div className="flex gap-4 justify-center mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms Of Service</a>
            <a href="#" className="hover:underline">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
