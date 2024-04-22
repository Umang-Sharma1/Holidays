import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { toast } from "react-toastify";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      toast.success("Sign out successful", { autoClose: 1000 }); // Set autoClose to 1 second
    },
    onError: () => {
      toast.error("Failed to sign out", { autoClose: 1000 }); // Set autoClose to 1 second
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-blue-500 to-green-500 text-white active:bg-blue-600 font-semibold uppercase text-sm py-2 px-4 rounded-lg hover:shadow-lg focus:outline-none transition duration-300"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
