import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
        
        {/* Header */}
        <div className="px-6 pt-6 pb-4 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Sign in to your account
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="px-6 pb-6 space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@company.com"
              className="h-11"
            />
          </div>

          {/* Password with Eye */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>

            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="h-11 pr-10"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <Button className="w-full h-11 rounded-xl">
            Sign In
          </Button>
        </form>

    <div className="flex justify-center mb-4">
        <p>Don't have an account? <a href="/sign-up" className="text-blue-600 hover:underline dark:text-blue-500">Sign up</a></p>
    </div>
      </div>
    </div>
  );
};

export default SignIn;
