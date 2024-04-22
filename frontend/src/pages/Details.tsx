import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Detail = () => {
  const { hotelId } = useParams();

  const {
    data: hotel,
    isLoading,
    isError,
  } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>; // Display loading message while hotel data is being fetched
  }

  if (isError || !hotel) {
    return <p>Error loading hotel details.</p>; // Display error message if data fetch fails
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // Automatically adjust slide height based on content
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{hotel.name}</h1>

      {/* Hotel Images (with Slider if multiple images) */}
      {hotel.imageUrls.length > 0 && (
        <Slider {...settings} className="mb-8">
          {hotel.imageUrls.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={hotel.name}
                className="rounded-md w-full object-cover max-h-96"
                style={{ maxHeight: "60vh" }} // Use viewport height for responsiveness
              />
            </div>
          ))}
        </Slider>
      )}

      {/* Star Rating */}
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-xl font-bold mr-2">Star Rating:</h2>
        <div className="flex">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar key={index} className="fill-yellow-400 mr-1 mt-1" />
          ))}
        </div>
      </div>

      {/* Hotel Facilities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        {hotel.facilities.map((facility, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-sm p-3 flex items-center justify-center"
          >
            {facility}
          </div>
        ))}
      </div>

      {/* Hotel Description */}
      <div className="bg-gray-100 p-6 rounded-md mb-8">
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">{hotel.description}</p>
      </div>

      {/* Guest Info Form */}
      <div>
        <GuestInfoForm
          pricePerNight={hotel.pricePerNight}
          hotelId={hotel._id}
        />
      </div>
    </div>
  );
};

export default Detail;
