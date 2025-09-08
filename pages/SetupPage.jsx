import { Outlet, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SetupPage() {
  return (
    <main className="p-10">
      {/* Main text */}
      <h1 className="text-3xl lg:text-4xl font-semibold leading-tight">
        Setup Your Account
      </h1>

      {/* Steps indicator */}
      <div className="flex items-center my-3">
        <p className="w-[50px] h-[50px] rounded-full bg-[#F2BA1D] flex items-center justify-center text-white text-xl font-semibold">
          1
        </p>
        <span className="w-15 h-[2px] bg-[#F2BA1D]"></span>
        <p className="w-[50px] h-[50px] rounded-full bg-[#08183A] flex items-center justify-center text-white text-xl font-semibold">
          2
        </p>
        <span className="w-15 h-[2px] bg-[#F2BA1D]"></span>
        <p className="w-[50px] h-[50px] rounded-full bg-[#08183A] flex items-center justify-center text-white text-xl font-semibold">
          3
        </p>
        <span className="w-15 h-[2px] bg-[#F2BA1D]"></span>
        <p className="w-[50px] h-[50px] rounded-full bg-[#08183A] flex items-center justify-center text-white text-xl font-semibold">
          4
        </p>
      </div>

      {/* Dynamic Setup Content */}

      <Outlet />

      {/* Navigation buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 text-sm font-semibold w-full sm:w-auto">
        <Link
          to=""
          className="flex items-center justify-center gap-2 p-2 border-2 border-[#F2BA1D] text-[#08183A] uppercase rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105"
        >
          Skip <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          to=""
          className="flex items-center justify-center gap-2 p-2 bg-[#F2BA1D] text-[#08183A] uppercase rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105"
        >
          Next <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </main>
  );
}
