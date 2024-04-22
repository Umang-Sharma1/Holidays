import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <>
      <h2 className="text-gray-700 text-2xl font-bold mb-5 mt-7">Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={`relative text-center ${
              typeWatch === type
                ? "bg-gradient-to-r from-blue-500 to-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            } text-sm rounded-lg py-3 px-4 font-semibold cursor-pointer transition duration-300 hover:bg-blue-600 hover:text-white`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "Please select a type",
              })}
              className="hidden"
            />
            <span className="block w-full text-center">{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <p className="text-red-500 text-sm mt-2">{errors.type.message}</p>
      )}
    </>
  );
};

export default TypeSection;
