import React from "react";
import {  useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); 
  };

    // const errorMessage =
    // errorType === "server"
    //   ? "Server Error! Something went wrong on our end."
    //   : "404 Not Found! The page doesn't exist.";

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center mt-28">
        <div className="text-7xl text-black">404 Page Not Found</div>
        <p className="text-2xl mt-4">
          The page you are looking for does not exist.
        </p>
        <div className="mt-4">
        <button
        onClick={handleGoHome}
        className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-300"
      >
        Back to Home Page
      </button>
        </div>
      </div>

    </div>
  );
};

export default Error;
