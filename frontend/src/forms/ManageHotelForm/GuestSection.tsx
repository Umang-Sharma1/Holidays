import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div>
      <h2 className="text-gray-700 text-2xl font-bold mt-5">Guests</h2>
      <div className="grid grid-cols-2 gap-5 bg-white mt-5 px-1 rounded-lg ">
        <div className="flex flex-col">
          <label
            htmlFor="adults"
            className="text-gray-700 text-sm font-semibold mb-1"
          >
            Adults
          </label>
          <input
            id="adults"
            type="number"
            className="border rounded py-2 px-3 text-gray-800"
            min={1}
            {...register("adultCount", {
              required: "Number of adults is required",
            })}
          />
          {errors.adultCount && (
            <span className="text-red-500 text-sm mt-1">
              {errors.adultCount.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="children"
            className="text-gray-700 text-sm font-semibold mb-1"
          >
            Children
          </label>
          <input
            id="children"
            type="number"
            className="border rounded py-2 px-3 text-gray-800"
            min={0}
            {...register("childCount", {
              required: "Number of children is required",
            })}
          />
          {errors.childCount && (
            <span className="text-red-500 text-sm mt-1">
              {errors.childCount.message}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestsSection;
