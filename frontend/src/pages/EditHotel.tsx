import { useMutation, useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditHotel = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  const { mutate, isLoading } = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      toast.success("Hotel Saved!", { autoClose: 1500 });
      navigate("/my-hotels"); // Navigate to my-hotels page on successful save
    },
    onError: () => {
      toast.error("Error Saving Hotel", { autoClose: 2500 });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <>
      <ManageHotelForm
        hotel={hotel}
        onSave={handleSave}
        isLoading={isLoading}
      />
    </>
  );
};

export default EditHotel;
