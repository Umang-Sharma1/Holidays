import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { useState } from "react";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-green-500 py-4 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </h1>
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            Menu
          </button>
          <nav
            className={`md:flex items-center space-x-4 ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
            {/* <Link
              to="/tours"
              className="text-white hover:text-gray-200 transition duration-300"
            > */}
            {/* Tours */}
            {/* </Link>  */}
            {isLoggedIn && (
              <>
                <Link
                  to="/my-bookings"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  My Bookings
                </Link>
                <Link
                  to="/my-hotels"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  My Hotels
                </Link>
                <SignOutButton />
              </>
            )}
            {!isLoggedIn && (
              <Link
                to="/sign-in"
                className="bg-white bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-2 rounded-full font-semibold hover:from-teal-500 hover:to-blue-600 transition duration-300 flex items-center"
              >
                <span className="text-black">Sign In</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
