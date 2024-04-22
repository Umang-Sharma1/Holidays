import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      toast.success("Sign in successful");
      await queryClient.invalidateQueries("validateToken");
      window.location.href = "/";
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
      className="flex flex-col gap-5 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-bold text-center">Sign In</h2>
      <div className="form-group">
        <input
          type="email"
          className="border border-gray-300 rounded-lg py-2 px-4 mt-1 w-full focus:outline-none focus:border-blue-500"
          placeholder="Email"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div className="form-group">
        <input
          type="password"
          className="border border-gray-300 rounded-lg py-2 px-4 mt-1 w-full focus:outline-none focus:border-blue-500"
          placeholder="Password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm py-3 rounded-lg w-full hover:shadow-lg focus:outline-none disabled:opacity-50"
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Signing in..." : "Sign In"}
      </button>

      <p className="mt-4 text-gray-600 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  );
};

export default SignIn;
