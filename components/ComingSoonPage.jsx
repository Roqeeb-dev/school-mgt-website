import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ComingSoon({ message = "Coming Soon" }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      {/* Spinner */}
      <Loader2 className="w-12 h-12 text-yellow-500 animate-spin mb-6" />

      {/* Text */}
      <h1 className="text-2xl font-bold">🚧 {message}</h1>
      <p className="text-gray-600 mt-2 mb-6">
        We’re working hard to bring this feature to you.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate(-1)} // takes user back to previous page
        className="px-5 py-2 bg-[#F2BA1D] text-black font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
      >
        Go Back
      </button>
    </div>
  );
}
