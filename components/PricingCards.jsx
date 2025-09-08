import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingCards() {
  // Plans data
  const plans = [
    {
      name: "Free",
      oldPrice: "$20",
      price: "$0",
      features: [
        { text: "View School Structure", available: true },
        { text: "Approve Leaves", available: true },
        { text: "Be up to date with activities", available: true },
        { text: "Have unlimited access", available: false },
      ],
    },
    {
      name: "Basic",
      oldPrice: "$50",
      price: "$30",
      features: [
        { text: "View School Structure", available: true },
        { text: "Approve Leaves", available: true },
        { text: "Be up to date with activities", available: true },
        { text: "Have unlimited access", available: true },
      ],
    },
    {
      name: "Standard",
      oldPrice: "$80",
      price: "$50",
      features: [
        { text: "Everything in Basic", available: true },
        { text: "Generate Reports", available: true },
        { text: "Advanced Analytics", available: true },
        { text: "Priority Support", available: true },
      ],
    },
    {
      name: "Premium",
      oldPrice: "$120",
      price: "$90",
      features: [
        { text: "All Standard features", available: true },
        { text: "Dedicated Account Manager", available: true },
        { text: "Custom Integrations", available: true },
        { text: "Unlimited Storage", available: true },
      ],
    },
  ];

  return (
    <>
      {/* Plans timeline switcher buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-end gap-3 text-sm font-semibold w-full sm:w-auto">
        <Link
          to=""
          className="flex items-center justify-center gap-2 p-2 border-2 border-[#F2BA1D] text-[#08183A] rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105"
        >
          Yearly
        </Link>
        <Link
          to="/setup/pricing"
          className="flex items-center justify-center gap-2 p-2 bg-[#F2BA1D] text-[#08183A] rounded-xl w-full sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105"
        >
          Monthly
        </Link>
      </div>

      {/* Main cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 px-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="border border-gray-300 p-6 rounded-md shadow-lg hover:shadow-xl transition flex flex-col justify-between"
          >
            {/* Plan name */}
            <p className="text-center text-2xl font-semibold mb-4">
              {plan.name}
            </p>

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
    </>
  );
}
