import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { AuthLayout } from "../../../shared/components";
import { Input, Button, Divider } from "../../../shared/components/ui";

interface LoginProps {
  onLoginSuccess?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic
    if (onLoginSuccess) {
      onLoginSuccess();
      navigate("/home");
    }
  };

  return (
    <AuthLayout
      title="Sign in"
      subtitle="Let's get started with your job search"
    >
      <form className="w-full max-w-sm space-y-6" onSubmit={handleSubmit}>
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
        <Button type="submit">Sign in</Button>
      </form>

      <div className="text-sm text-gray-400 mt-6 w-full max-w-sm flex justify-between">
        <Link to="/forgetPassword">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Forget password?
          </a>
        </Link>

        <Link to="/signup">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Sign-up
          </a>
        </Link>
      </div>

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

export default Login;
