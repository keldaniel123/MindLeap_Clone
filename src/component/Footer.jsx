import React from "react";
import footerLogo from "../assets/footer-logo.svg";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="py-12 bg-grey-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8"
      >
        <div className="px-8 space-y-6">
          <div className="flex items-center space-x-2">
            <img src={footerLogo} alt="" className="w-32 h-auto" />
          </div>
          <p className="text-para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
            consectetur! Aut earum magnam, consequuntur itaque laboriosam alias
            similique aspernatur incidunt?
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="space-y-6 px-8">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline text-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:underline text-gray-700">
                About
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:underline text-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:underline text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6 px-8">
          <h3 className="text-xl font-semibold mb-4">Supports</h3>
          <ul className="space-y-3">
            <li>
              <a href="#FAQ" className="hover:underline text-gray-700">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#Terms of Service"
                className="hover:underline text-gray-700"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#Privacy Policy"
                className="hover:underline text-gray-700"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#Support Center"
                className="hover:underline text-gray-700"
              >
                Support Center
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6 px-8">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMapMarkedAlt className="text-primary" />
              <p className="text-gray-700">123 Street, City, Country</p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <p className="text-gray-700">+234 5955 89399</p>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <p className="text-gray-700">info@mindleap.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
