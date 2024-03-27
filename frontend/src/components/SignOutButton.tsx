import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { toast } from "react-toastify";

const SignOutButton = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      toast.success("Sign out successful");
    },
    onError: () => {
      toast.error("Failed to sign out");
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm py-2 px-4 rounded-lg hover:shadow-lg focus:outline-none"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
