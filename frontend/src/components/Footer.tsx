import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-6"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <h2 className="text-lg font-bold">Explore</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Tours
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">Connect</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-center">Follow Us</h2>
          <div className="mt-4 flex justify-center">
            <a href="#" className="text-2xl mr-4 hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl mr-4 hover:text-black">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-black">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
