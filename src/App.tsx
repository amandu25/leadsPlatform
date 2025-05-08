import "./App.css";
import Home from "./components/Home";
import PasswordChanged from "./components/PasswordChanged";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import OtpInput from "./components/OtpInput";
import ResetPassword from "./components/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/otp" element={<OtpInput />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/passwordChanged" element={<PasswordChanged />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
