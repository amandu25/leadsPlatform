import React from "react";
import { AiOutlineUser } from "react-icons/ai";
// import { CiUser } from "react-icons/ci";
// import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLockClosedOutline } from "react-icons/io5";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white px-6 sm:px-12 lg:px-16 py-12">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-left">
            Sign in
          </h2>
          <p className="text-gray-500 mb-6 text-left text-sm sm:text-base">
            Lorem ipsum dolor sit ame consectetur emet
          </p>
        </div>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full pr-10 pl-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <AiOutlineUser className="absolute right-3 top-3.5 text-gray-400" />
          </div>
          <div className="mb-6 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full pr-10 pl-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <IoLockClosedOutline className="absolute right-3 top-3.5 text-gray-400" />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 transition rounded-full shadow-md font-semibold text-gray-900"
          >
            Log in
          </button>
        </form>
        <div className="text-sm text-gray-600 mt-4">
          <a href="#" className="hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="my-6 flex items-center w-full max-w-sm">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-full px-6 py-2 w-full max-w-sm">
          <FcGoogle size={20} />
          <span>Log in with Google</span>
        </button>
      </div>

      {/* Right Side - Illustration (hidden on small screens) */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-yellow-50 items-center justify-center p-8 sm:p-12 lg:p-16">
        {/* <img
          src="/illustration.png"
          alt="Analytics Illustration"
          className="max-w-full h-auto"
        /> */}
      </div>
    </div>
  );
};

export default Login;
