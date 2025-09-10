import { Check, X } from "lucide-react";
import { billingPlans } from "./academicData";

export default function Billing() {
  // Top "current plan" card details
  const currentPlan = {
    name: "Basic",
    oldPrice: "$20",
    price: "$0",
    features: [
      { text: "View School Structure", available: true },
      { text: "Approve Leaves", available: true },
      { text: "Be up to date with activities", available: true },
      { text: "Have unlimited access", available: false },
    ],
  };

  return (
    <main className="px-6 py-8">
      {/* Top section with text + current plan card */}
      <section className="flex justify-between items-start">
        {/* Text info */}
        <div className="text-xl flex flex-col gap-3">
          <p>
            Your Current Plan: <strong>Basic</strong>
          </p>
          <p>
            Your Payment method: <strong>UPI</strong>
          </p>
          <p className="text-lg font-bold mt-2">
            Dear User, your account will be changed after 23 days
          </p>
        </div>

        {/* Current Plan Card */}
        <div className="relative border border-gray-300 p-6 rounded-md shadow-lg hover:shadow-xl hover:bg-yellow-100 transition flex flex-col justify-between">
          {/* Badge */}
          <span className="absolute top-0 right-0 bg-[#F2BA1D] text-black text-xs font-bold px-3 py-1 rounded">
            Your Current Plan
          </span>

          {/* Plan name */}
          <p className="text-2xl font-semibold mb-4">{currentPlan.name}</p>

          {/* Features */}
          <ul className="flex flex-col gap-3 mb-6">
            {currentPlan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                {feature.available ? (
                  <Check className="h-5 w-5 p-1 bg-[#F2BA1D] text-white rounded-full" />
                ) : (
                  <X className="h-5 w-5 p-1 bg-black text-white rounded-full" />
                )}
                {feature.text}
              </li>
            ))}
          </ul>

          {/* Pricing */}
          <div className="flex justify-center items-center gap-2 text-lg">
            <p className="text-gray-500 line-through">{currentPlan.oldPrice}</p>
            <p className="font-bold">{currentPlan.price}</p>
          </div>
        </div>
      </section>

      {/* Bottom cards */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {billingPlans.map((plan, idx) => (
          <div
            key={idx}
            className="border border-gray-300 p-6 rounded-md shadow-lg hover:shadow-xl hover:bg-yellow-100 transition flex flex-col justify-between"
          >
            {/* Plan name */}
            <p className="text-2xl font-semibold mb-4">{plan.name}</p>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  {feature.available ? (
                    <Check className="h-5 w-5 p-1 bg-[#F2BA1D] text-white rounded-full" />
                  ) : (
                    <X className="h-5 w-5 p-1 bg-black text-white rounded-full" />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="flex justify-center items-center gap-2 text-lg">
              <p className="text-gray-500 line-through">{plan.oldPrice}</p>
              <p className="font-bold">{plan.price}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
