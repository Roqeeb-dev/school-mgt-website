import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SetupPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 Define step routes + labels
  const stepMap = [
    { path: "/setup", step: 1, text: "Basic Information" },
    { path: "/setup/pricing", step: 2, text: "Choose Plan" },
    { path: "/setup/payment", step: 3, text: "Select Payment" },
    { path: "/setup/finish", step: 4, text: "Finish" },
  ];

  // Find the current step based on pathname
  const currentStep =
    stepMap.find((s) => s.path === location.pathname)?.step || 1;

  const handleNext = () => {
    if (currentStep === 1) navigate("/setup/pricing");
    else if (currentStep === 2) navigate("/setup/payment");
    else if (currentStep === 3) navigate("/setup/finish");
  };

  return (
    <main className="p-10">
      {/* Main text */}
      <h1 className="text-3xl lg:text-4xl font-semibold leading-tight">
        Setup Your Account
      </h1>

      {/* Steps indicator */}
      <div className="flex flex-col sm:flex-row items-center justify-start gap-6 sm:gap-8 my-6">
        {stepMap.map((step, i) => (
          <div
            key={step.step}
            className="flex flex-col sm:flex-row items-center relative"
          >
            {/* Circle + Label */}
            <div className="flex flex-col items-center">
              <p
                className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-white text-lg font-semibold transition-colors
            ${
              step.step === currentStep
                ? "bg-[#F2BA1D]" // active
                : "bg-[#08183A]" // inactive
            }`}
              >
                {step.step}
              </p>
              <span className="mt-2 text-xs font-medium text-center text-gray-600">
                {step.text}
              </span>
            </div>

            {/* Connector line */}
            {i < stepMap.length - 1 && (
              <>
                {/* Horizontal line on larger screens */}
                <div className="hidden sm:block w-12 h-[2px] bg-[#F2BA1D]"></div>

                {/* Vertical line on mobile */}
                <div className="block sm:hidden w-[2px] h-6 bg-[#F2BA1D] my-2"></div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Dynamic Setup Content */}
      <Outlet />

      {/* Navigation buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 text-sm font-semibold w-full sm:w-auto">
        <Link
          to=""
          className="flex items-center justify-center gap-2 p-2 border-2 border-[#F2BA1D] text-[#F2BA1D] uppercase rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105"
        >
          Skip <ArrowRight className="h-5 w-5" />
        </Link>

        <button
          onClick={handleNext}
          className="flex items-center justify-center gap-2 p-2 bg-[#F2BA1D] text-[#08183A] uppercase rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105"
        >
          {currentStep === 4 ? "Done" : "Next"}
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </main>
  );
}
