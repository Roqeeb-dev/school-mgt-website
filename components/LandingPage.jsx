import { ArrowRight } from "lucide-react";
import logo from "../src/assets/school-logo.png";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 text-center h-screen px-4">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-28 md:w-36 lg:w-44 mx-auto" />
      </div>

      {/* Main text */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
        Easy School Management
      </h1>

      {/* Design circles */}
      <div className="flex items-center space-x-3">
        <span className="w-3 h-3 rounded-full bg-[#F2BA1D]"></span>
        <span className="w-3 h-3 rounded-full bg-[#08183A]"></span>
        <span className="w-3 h-3 rounded-full bg-[#F2BA1D]"></span>
        <span className="w-3 h-3 rounded-full bg-[#08183A]"></span>
        <span className="w-3 h-3 rounded-full bg-[#F2BA1D]"></span>
      </div>

      {/* Terms and condition checkbox */}
      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 font-medium">
        <input
          type="checkbox"
          name="accept"
          id="accept"
          className="rounded-full border-gray-300 focus:ring-[#F2BA1D] cursor-pointer"
        />
        <label htmlFor="accept" className="cursor-pointer">
          Accept Terms and conditions
        </label>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 text-sm font-semibold w-full sm:w-auto">
        <button className="p-2 border-2 border-[#F2BA1D] rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#F2BA1D] hover:text-[#08183A] hover:shadow-lg hover:scale-105">
          Already have an account?
        </button>
        <button className="flex items-center justify-center gap-2 p-2 bg-[#F2BA1D] text-[#08183A] uppercase rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105">
          Next <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </main>
  );
}
