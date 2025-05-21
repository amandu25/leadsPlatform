import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import components from feature modules
import { Home } from "./features/dashboard";
import {
  Login,
  SignUp,
  ForgetPassword,
  OtpInput,
  ResetPassword,
  PasswordChanged,
} from "./features/auth";
import { ProfileSetup } from "./features/profile";

function App() {
  // Mock authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Protected route wrapper
  const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />}
    //     />
    //     <Route
    //       path="/home"
    //       element={
    //         <ProtectedRoute>
    //           <Home />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/profile-setup"
    //       element={
    //         <ProtectedRoute>
    //           <ProfileSetup />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route path="/signup" element={<SignUp />} />
    //     <Route path="/forgetPassword" element={<ForgetPassword />} />
    //     <Route path="/otp" element={<OtpInput />} />
    //     <Route path="/resetPassword" element={<ResetPassword />} />
    //     <Route path="/passwordChanged" element={<PasswordChanged />} />
    //   </Routes>
    // </BrowserRouter>
    <>Test</>
  );
}

export default App;
