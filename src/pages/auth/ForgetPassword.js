import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  return (
    <div className="flex items-center justify-center p-10 min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-[#000D]">Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium text-[#07074D] mb-2">
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
          <div className="flex justify-center items-center mb-4">
            <button
              type="submit"
              onClick={() => navigate("/reset-password")}
              className="bg-black text-white font-normal py-2 px-4 rounded-none w-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-opacity-50 uppercase"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
