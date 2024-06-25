import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/action/auth";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(login(email, password)); // Pass email and password to login action
      if (res === true) {
        navigate("/"); // Navigate to home page on successful login
      } else {
        alert("Invalid Credentials"); // Show alert for invalid credentials
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again."); // Handle error gracefully
    }
  };

  return (
    <div className="flex items-center justify-center p-10 min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-[#000D]">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md rounded-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-base font-medium text-[#07074D] mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md rounded-none"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              type="submit"
              className="bg-black text-white font-normal py-2 px-4 rounded-none w-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-opacity-50 uppercase"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={() => navigate("/forget-password")}
            className="text-sm text-[#6A64F1] hover:underline"
          >
            Forgot Password?
          </button>
          <button
            type="button"
            // onClick={() => history.push("/sign-up")}
            onClick={() => navigate("/sign-up")}
            className="text-sm text-[#6A64F1] hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
