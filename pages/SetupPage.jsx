import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SetupPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 Map routes to step numbers
  const stepMap = {
    "/setup": 1,
    "/setup/pricing": 2,
    "/setup/payment": 3,
    "/setup/finish": 4,
  };

  const currentStep = stepMap[location.pathname] || 1;
  const steps = [1, 2, 3, 4];

  const handleNext = () => {
    // navigate to the next step based on current step
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
      <div className="flex items-center my-3">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <p
              className={`w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl font-semibold transition-colors
                ${
                  step === currentStep
                    ? "bg-[#F2BA1D]" // active
                    : "bg-[#08183A]" // inactive
                }`}
            >
              {step}
            </p>
            {/* Connector line except after the last step */}
            {i < steps.length - 1 && (
              <span className="w-16 h-[2px] bg-[#F2BA1D]"></span>
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
        {currentStep < 4 && (
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 p-2 bg-[#F2BA1D] text-[#08183A] uppercase rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105"
          >
            Next <ArrowRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </main>
  );
}
