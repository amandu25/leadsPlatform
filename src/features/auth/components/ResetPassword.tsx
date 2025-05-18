import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../../../shared/components";
import { Input, Button } from "../../../shared/components/ui";
import { Eye, EyeOff } from "lucide-react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const validateForm = () => {
    if (!newPassword || !repeatPassword) {
      return "Both fields are required.";
    }
    if (newPassword.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (newPassword !== repeatPassword) {
      return "Passwords do not match.";
    }
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrors(validationError);
    } else {
      setErrors(null);
      // Proceed with password reset logic
      alert("Password reset successful!");
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Lorem ipsum dolor sit ame consectetur emet"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="New Password"
          icon={
            showPassword ? (
              <Eye
                size={18}
                className="cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeOff
                size={18}
                className="cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )
          }
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Repeat Password"
          icon={
            showPassword ? (
              <Eye
                size={18}
                className="cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeOff
                size={18}
                className="cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )
          }
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />

        {errors && <p className="text-red-500 text-sm">{errors}</p>}
        <Link to="/passwordChanged">
          <Button type="submit">Reset Password</Button>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
