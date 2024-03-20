import React from 'react';
import contactImage from '../assets/contact.jpg';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center font-cursive text-pink-600">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img src={contactImage} alt="Contact Us" className="rounded-lg shadow-lg mb-4" />
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4 flex items-center">
              <FaPhoneAlt className="mr-2 text-gray-500" />
              <span className="text-lg">8051281283</span>
            </div>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="mr-2 text-gray-500" />
              <span className="text-lg">juleeperween34@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span className="text-lg">Hyderabad, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
