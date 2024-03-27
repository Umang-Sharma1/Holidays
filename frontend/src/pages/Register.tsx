import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as apiClient from "../api-client";

import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset, // Add reset method from useForm
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      toast.success("Registration Success!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // toastClassName: "toast-custom",
        bodyClassName: "toast-body",
      });

      navigate("/");
      await queryClient.invalidateQueries("validateToken");
      reset(); // Clear form fields
    },
    onError: (error: Error) => {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // toastClassName: "toast-custom",
        bodyClassName: "toast-body",
      });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form className="flex flex-col gap-6 max-w-md mx-auto" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-center">Create an account</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-gray-700 text-sm font-bold block">
            First Name
            <input
              className="border border-gray-300 rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:border-blue-500"
              {...register("firstName", { required: "This field is required" })}
            />
          </label>
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>
        <div>
          <label className="text-gray-700 text-sm font-bold block">
            Last Name
            <input
              className="border border-gray-300 rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:border-blue-500"
              {...register("lastName", { required: "This field is required" })}
            />
          </label>
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>
      </div>
      <label className="text-gray-700 text-sm font-bold block">
        Email
        <input
          type="email"
          className="border border-gray-300 rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:border-blue-500"
          {...register("email", { required: "This field is required" })}
        />
      </label>
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <label className="text-gray-700 text-sm font-bold block">
        Password
        <input
          type="password"
          className="border border-gray-300 rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:border-blue-500"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </label>
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}
      <label className="text-gray-700 text-sm font-bold block">
        Confirm Password
        <input
          type="password"
          className="border border-gray-300 rounded-lg w-full py-2 px-4 mt-1 focus:outline-none focus:border-blue-500"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
      </label>
      {errors.confirmPassword && (
        <span className="text-red-500">{errors.confirmPassword.message}</span>
      )}
      <button
        type="submit"
        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 px-6 rounded-lg mt-4 font-semibold hover:from-teal-500 hover:to-blue-600 transition duration-300"
      >
        Create Account
      </button>
    </form>
  );
};

export default Register;
