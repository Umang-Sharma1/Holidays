import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="mt-7">
      <h2 className="text-gray-700 text-2xl font-bold mb-5">Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="flex items-center text-sm text-gray-700 font-semibold"
          >
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">{facility}</span>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <p className="text-red-500 text-sm mt-1">{errors.facilities.message}</p>
      )}
    </div>
  );
};

export default FacilitiesSection;
