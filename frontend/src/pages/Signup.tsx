import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface SignupFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<SignupFormInputs>({ mode: "all" });

  const onSubmit: SubmitHandler<SignupFormInputs> = (data) => {
    
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto mt-10 mb-10 p-6 bg-white shadow-box rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Name is required"
                },
                pattern: {
                  value: /^[a-zA-Z][a-zA-Z\s'-]*[a-zA-Z]$/,
                  message: "Please enter a valid name"
                }
              }}
              render={({ field }) => (
                <input
                  id="name"
                  type="text"
                  {...field}
                  className={`w-full p-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Email is required"
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address"
                }
              }}
              render={({ field }) => (
                <input
                  id="email"
                  type="email"
                  {...field}
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ 
                required: {
                  value: true,
                  message: "Please create a password"
                },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long"
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters are allowed"
                }
              }}
              render={({ field }) => (
                <input
                  id="password"
                  type="password"
                  {...field}
                  className={`w-full p-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: !!watch("password"),
                  message: "Please confirm you password"
                },
                validate: (fieldValue) => (
                  watch("password") === fieldValue || "Password did not match"
                )
              }}
              render={({ field }) => (
                <input
                  id="confirmPassword"
                  type="password"
                  {...field}
                  className={`w-full p-2 border ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md`}
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
