import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="text-2xl text-yellow-500" />
          <div>
            <h4 className="font-semibold">Address</h4>
            <p>123 Street Name</p>
            <p>City, Country</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-start space-x-3">
          <FaEnvelope className="text-2xl text-yellow-500" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="flex items-start space-x-3">
          <FaPhoneAlt className="text-2xl text-yellow-500" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>+123 456 7890</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-2xl text-white hover:text-yellow-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl text-white hover:text-yellow-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl text-white hover:text-yellow-500">
            <FaInstagram />
          </a>
        </div>

        <p className="mt-4">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
