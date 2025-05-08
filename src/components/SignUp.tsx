import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import AuthLayout from "./shared/layout/AuthLayout";
import Input from "./shared/ui/Input";
import Button from "./shared/ui/Button";
import Divider from "./shared/ui/Divider";

const SignUp: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign-up logic
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Lorem ipsum dolor sit ame consectetur emet"
    >
      <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="User Name"
          icon={<AiOutlineUser />}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          icon={<AiOutlineUser />}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          icon={<IoLockClosedOutline />}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>

      <div className="flex items-center mt-6 w-full max-w-sm text-white text-sm">
        <input
          type="checkbox"
          id="terms"
          className="mr-2 accent-[#ffce3a]"
          required
        />
        <label htmlFor="terms">I accept the terms and privacy policy</label>
      </div>

      <Divider text="or" className="my-8" />

      <Button variant="google">
        <div className="flex items-center justify-center gap-3">
          <FcGoogle size={20} />
          <span>Sign up with Google</span>
        </div>
      </Button>
    </AuthLayout>
  );
};

export default SignUp;
