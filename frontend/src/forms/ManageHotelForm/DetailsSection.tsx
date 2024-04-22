import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-center mb-6">Add Hotel</h2>
      <div className="bg-white rounded-lg  w-full">
        <div className="mb-6">
          <label
            htmlFor="hotelName"
            className="text-gray-700 text-sm font-bold mb-2 block"
          >
            Hotel Name
          </label>
          <input
            id="hotelName"
            type="text"
            className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            {...register("name", { required: "Hotel name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="text-gray-700 text-sm font-bold mb-2 block"
            >
              City
            </label>
            <input
              id="city"
              type="text"
              className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="country"
              className="text-gray-700 text-sm font-bold mb-2 block"
            >
              Country
            </label>
            <input
              id="country"
              type="text"
              className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="description"
            className="text-gray-700 text-sm font-bold mb-2 block"
          >
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="form-textarea w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="pricepernight"
            className="text-gray-700 text-sm font-bold mb-2 block"
          >
            Price Per Night
          </label>
          <input
            id="pricepernight"
            min={1}
            type="number"
            className="form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            {...register("pricePerNight", {
              required: "Price Per Night is required",
            })}
          ></input>
          {errors.pricePerNight && (
            <p className="text-red-500 text-sm mt-1">
              {errors.pricePerNight.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="starrating"
            className="text-gray-700 text-sm font-bold mb-2 mt-2 block"
          >
            Star Rating
          </label>
          <select
            id="starrating"
            {...register("starRating", { required: "Star Rating is required" })}
            className="form-select w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="" className="text-gray-500" disabled>
              Select Star Rating
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num} className="text-gray-700">
                {num}
              </option>
            ))}
          </select>
          {errors.starRating && (
            <p className="text-red-500 text-sm mt-1">
              {errors.starRating.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
