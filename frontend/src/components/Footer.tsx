import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center">
          <h2 className="text-lg font-bold">Explore</h2>
          <ul className="mt-4 space-y-2">
            <li className="mb-2">
              <a href="#" className="hover:text-black font-semibold">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black font-semibold">
                Tours
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black font-semibold">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">Connect</h2>
          <ul className="mt-4 space-y-2">
            <li className="mb-2">
              <a href="#" className="hover:text-black font-semibold">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black font-semibold">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-black font-semibold">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-center">Follow Us</h2>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-2xl hover:text-black">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-black">
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
