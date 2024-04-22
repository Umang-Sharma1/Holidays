import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import ImagesSection from "./ImagesSection";
import { HotelType } from "../../../../backend/src/shared/types";
import { useEffect } from "react";
import GuestsSection from "./GuestSection";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};

type Props = {
  hotel?: HotelType;
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

const ManageHotelForm = ({ onSave, isLoading, hotel }: Props) => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataJson: HotelFormData) => {
    const formData = new FormData();
    if (hotel) {
      formData.append("hotelId", hotel._id);
    }
    formData.append("name", formDataJson.name || "");
    formData.append("city", formDataJson.city || "");
    formData.append("country", formDataJson.country || "");
    formData.append("description", formDataJson.description || "");
    formData.append("type", formDataJson.type || "");
    formData.append(
      "pricePerNight",
      formDataJson.pricePerNight?.toString() || "0"
    ); // Use optional chaining (?.) to safely access
    formData.append("starRating", formDataJson.starRating?.toString() || "0"); // Use optional chaining (?.) to safely access
    formData.append("adultCount", formDataJson.adultCount?.toString() || "0"); // Use optional chaining (?.) to safely access
    formData.append("childCount", formDataJson.childCount?.toString() || "0"); // Use optional chaining (?.) to safely access
    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    onSave(formData);
  });

  return (
    <FormProvider {...formMethods}>
      <div className="flex justify-center items-center min-h-screen">
        <form className="w-full max-w-xl" onSubmit={onSubmit}>
          <div className="bg-white rounded-lg shadow-md p-6">
            <DetailsSection />
            <TypeSection />
            <FacilitiesSection />
            <GuestsSection />
            <ImagesSection />

            <div className="flex justify-end mt-7">
              <button
                disabled={isLoading}
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white active:bg-blue-600 font-semibold  text-md py-2 px-4 rounded-lg hover:shadow-lg focus:outline-none transition duration-300 disabled:bg-gray-500"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default ManageHotelForm;
