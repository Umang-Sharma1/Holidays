import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-500 to-green-500 py-16 px-4 sm:px-8 lg:px-16 xl:px-20"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
          Find Your Next Stay
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
          Search low prices on hotels for your dream vacation...
        </p>
        <Link
          to="/search"
          className="bg-white bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 hover:from-teal-500 hover:to-blue-600 transition duration-300"
        >
          Start Searching
        </Link>
      </div>
    </section>
  );
};

export default Hero;
