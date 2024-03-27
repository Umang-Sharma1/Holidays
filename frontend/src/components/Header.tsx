import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header
      className="bg-gradient-to-r from-blue-500 to-green-500 py-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Holidays.com</Link>
        </h1>
        <div className="flex items-center space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition duration-300"
              style={{ fontSize: "16px" }}
            >
              Home
            </Link>
            <Link
              to="/tours"
              className="text-white hover:text-gray-200 transition duration-300"
              style={{ fontSize: "16px" }}
            >
              Tours
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition duration-300"
              style={{ fontSize: "16px" }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 transition duration-300"
              style={{ fontSize: "16px" }}
            >
              Contact
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  to="/my-bookings"
                  className="text-white hover:text-gray-200 transition duration-300"
                  style={{ fontSize: "16px" }}
                >
                  My Bookings
                </Link>
                <Link
                  to="/my-hotels"
                  className="text-white hover:text-gray-200 transition duration-300"
                  style={{ fontSize: "16px" }}
                >
                  My Hotels
                </Link>
              </>
            )}
          </nav>
          {isLoggedIn ? (
            <SignOutButton />
          ) : (
            <Link
              to="/sign-in"
              className="bg-white bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-2 rounded-full font-semibold hover:from-teal-500 hover:to-blue-600 transition duration-300 flex items-center"
              style={{ height: "40px" }}
            >
              <span className="text-black">Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
