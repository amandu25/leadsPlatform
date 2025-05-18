import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthLayout } from "../../../shared/components";
import { Input } from "../../../shared/components/ui";
import Button from "../../../shared/components/ui/Button";
import Divider from "../../../shared/components/ui/Divider";

const ForgetPassword: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle forgot password logic
  };

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Lorem ipsum dolor sit ame consectetur emet"
    >
      <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          icon={<AiOutlineUser />}
          required
        />
        <Link to="/otp">
          <Button type="submit">Send Code</Button>
        </Link>
      </form>

      <Divider text="or" className="my-8" />

      <Button variant="google">
        <div className="flex items-center justify-center gap-3">
          <FcGoogle size={20} />
          <span>Log in with Google</span>
        </div>
      </Button>
    </AuthLayout>
  );
};

export default ForgetPassword;
