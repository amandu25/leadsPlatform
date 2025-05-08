import "./App.css";
import PasswordChanged from "./components/PasswordChanged";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";
import OtpInput from "./components/OtpInput";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <>
      <Login />
      <SignUp />
      <ForgetPassword />
      <OtpInput />
      <ResetPassword />
      <PasswordChanged />
    </>
  );
}

export default App;
