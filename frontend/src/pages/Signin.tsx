import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface SigninFormInputs {
  identifier: string;
  password: string;
}

const SigninForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<SigninFormInputs>({ mode: "all" });

  const onSubmit: SubmitHandler<SigninFormInputs> = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if(!data.success) {
        throw new Error(data.message);
      }
      toast.success("You are logged in successfully")
      reset();
      navigate("/");
    } catch (error) {
      const err = error as Error;
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <Controller
              name="identifier"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Username or email is required"
                },
              }}
              render={({ field }) => (
                <input
                  id="identifier"
                  type="text"
                  placeholder="Username or email"
                  {...field}
                  className={`w-full px-4 py-2 border-none bg-gray-100 outline-none ${
                    errors.identifier ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                />
              )}
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm mt-1">{errors.identifier.message}</p>
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
                  message: "Password is required"
                },
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

          <button
            disabled={isLoading}
            type="submit"
            className="w-full bg-slate-600 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md uppercase"
          >
            { isLoading ? "Please wait...": "Sign In" }
          </button>
        </form>

        <div className="flex gap-2 mt-6 items-center">
          <p className="text-sm">Don&apos;t have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-500 text-sm">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
