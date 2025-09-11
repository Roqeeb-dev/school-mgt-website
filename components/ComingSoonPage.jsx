import { Construction, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ComingSoon({ message = "Coming Soon" }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 text-gray-800 p-6">
      {/* Animated Icon */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="mb-6"
      >
        <Construction className="w-16 h-16 text-yellow-500" />
      </motion.div>

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-2"
      >
        🚧 {message} 🚧
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-gray-600 text-center max-w-md mb-8"
      >
        We’re working hard behind the scenes to bring this feature to you soon.
        Stay tuned for updates!
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-5 py-2 bg-[#F2BA1D] text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </motion.button>
    </div>
  );
}
