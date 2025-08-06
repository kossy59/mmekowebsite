import React from "react";
import PacmanLoader from "react-spinners/RotateLoader";

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center min-h-[200px]">
    <PacmanLoader color="#d49115" size={18} />
  </div>
);

export default LoadingSpinner;