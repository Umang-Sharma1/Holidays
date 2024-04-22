import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const NoHotelsFoundMessage = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <p className="text-gray-600 text-lg mb-4">Oops! No hotels found.</p>
    <Link
      to="/add-hotel"
      className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-500"
    >
      Add your first hotel
    </Link>
  </div>
);

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels
  );

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-500"
        >
          Add Hotel
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {hotelData && hotelData.length > 0 ? (
          hotelData.map((hotel) => (
            <div
              key={hotel._id}
              data-testid="hotel-card"
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
              <p className="text-gray-600 mb-4">{hotel.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <BsMap className="text-blue-500 mr-2" />
                  <span className="text-gray-700">
                    {hotel.city}, {hotel.country}
                  </span>
                </div>
                <div className="flex items-center">
                  <BsBuilding className="text-blue-500 mr-2" />
                  <span className="text-gray-700">{hotel.type}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <BiMoney className="text-blue-500 mr-2" />
                  <span className="text-gray-700">
                    ₹{hotel.pricePerNight} per night
                  </span>
                </div>
                <div className="flex items-center">
                  <BiHotel className="text-blue-500 mr-2" />
                  <span className="text-gray-700">
                    {hotel.adultCount} adults, {hotel.childCount} children
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <BiStar className="text-blue-500 mr-2" />
                <span className="text-gray-700">
                  {hotel.starRating} Star Rating
                </span>
              </div>

              <div className="mt-4 flex justify-end">
                <Link
                  to={`/edit-hotel/${hotel._id}`}
                  className="bg-blue-600 text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <NoHotelsFoundMessage />
        )}
      </div>
    </div>
  );
};

export default MyHotels;
