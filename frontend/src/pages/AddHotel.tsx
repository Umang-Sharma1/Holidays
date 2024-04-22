import { useMutation } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import * as apiClient from "../api-client";

const AddHotel = () => {
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      toast.success("Hotel Saved", { autoClose: 1000 });
    },
    onError: (error: unknown) => {
      // Use type assertion or type guard
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`, { autoClose: 3000 });
      } else {
        toast.error("An unknown error occurred", { autoClose: 3000 });
      }
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
