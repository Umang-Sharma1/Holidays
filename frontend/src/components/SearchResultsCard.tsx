import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import {
  FaWifi,
  FaParking,
  FaShuttleVan,
  FaBed,
  FaSwimmer,
  FaSpa,
  FaDumbbell,
} from "react-icons/fa";
import { MdSmokeFree } from "react-icons/md";
import { useState } from "react";

type Props = {
  hotel: HotelType;
};

const facilityIcons: Record<string, JSX.Element> = {
  "Free WiFi": <FaWifi />,
  Parking: <FaParking />,
  "Airport Shuttle": <FaShuttleVan />,
  "Family Rooms": <FaBed />,
  "Non-Smoking Rooms": <MdSmokeFree />,
  "Outdoor Pool": <FaSwimmer />,
  Spa: <FaSpa />,
  "Fitness Center": <FaDumbbell />,
};

const SearchResultsCard = ({ hotel }: Props) => {
  const [showAllFacilities, setShowAllFacilities] = useState(false);

  const displayedFacilities = showAllFacilities
    ? hotel.facilities
    : hotel.facilities.slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded">
          <span className="text-xs font-semibold">
            Starting from ₹{hotel.pricePerNight}/night
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-xl font-bold text-blue-600 mr-2">
            {hotel.name}
          </span>
          <span className="flex items-center text-sm">
            {Array.from({ length: Math.floor(hotel.starRating) }).map(
              (_, index) => (
                <AiFillStar key={index} className="text-yellow-400" />
              )
            )}
            {hotel.starRating % 1 !== 0 && (
              <AiFillStar className="text-yellow-400" />
            )}
          </span>
        </div>
        <div className="mb-2 text-gray-600 line-clamp-3">
          {hotel.description}
        </div>
        <div className="flex items-center mb-2">
          <MdLocationOn className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-600">{hotel.city}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {displayedFacilities.map((facility, index) => (
            <span
              key={index}
              className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold flex items-center"
            >
              {facilityIcons[facility]}
              <span className="ml-1">{facility}</span>
            </span>
          ))}
          {hotel.facilities.length > 2 && (
            <button
              className="bg-gray-200 px-2 py-1 rounded text-xs font-semibold flex items-center"
              onClick={() => setShowAllFacilities(!showAllFacilities)}
            >
              +{hotel.facilities.length - 2} more
            </button>
          )}
        </div>
        <Link
          to={`/detail/${hotel._id}`}
          className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-center font-bold text-lg hover:bg-blue-500 lg:mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SearchResultsCard;
