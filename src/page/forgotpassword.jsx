/* eslint-disable no-unused-vars */


import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/logo(8).png"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/api/users/forgot-password", { email });
      toast.success("Kindly check your email for the reset link.");
    } catch (error) {
      toast.error("Error sending email. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center  mt-[5rem]">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg w-[90%] max-w-[400px]">
      <img
              src={Logo}
              alt="image"
              style={{ width: "80px", display: "block", margin: "0 auto" }}
            />
        <h2 className="text-center text-xl font-semibold mb-4">Forgot Password</h2>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>

        <button type="submit" className="w-full py-2 mt-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

