import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";

interface SignupFormInputs {
  username: string;
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
      <div className="max-w-md mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-5">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Username is required"
                },
              }}
              render={({ field }) => (
                <input
                  id="name"
                  type="text"
                  placeholder="Username"
                  {...field}
                  className={`w-full px-4 py-2 border-none bg-gray-100 outline-none ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
              )}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div className="mb-5">
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
                  placeholder="Email"
                  {...field}
                  className={`w-full px-4 py-2 border-none bg-gray-100 outline-none ${
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

          <div className="mb-5">
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
                  placeholder="Password"
                  {...field}
                  className={`w-full px-4 py-2 border-none bg-gray-100 outline-none ${
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

          <div className="mb-5">
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
                  placeholder="Confirm Password"
                  {...field}
                  className={`w-full px-4 py-2 border-none bg-gray-100 outline-none ${
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
            className="w-full bg-slate-600 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md uppercase"
          >
            Sign up
          </button>
        </form>

        <div className="flex gap-2 mt-6 items-center">
          <p className="text-sm">Already have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-500 text-sm">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
