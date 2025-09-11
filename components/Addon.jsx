import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { instituteServices, integrationServices } from "./academicData";

export default function Addon() {
  const navigate = useNavigate();
  return (
    <section className="px-6">
      {/* Top description and cancel icon */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold">Add-On Services</p>
          <p className="text-[#F2BA1D] text-xs">To Get more features</p>
        </div>
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="p-1 cursor-pointer rounded-full bg-black hover:bg-gray-800"
        >
          <X className="text-white h-3 w-3" />
        </div>
      </div>

      {/* Add on services boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
        {instituteServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="p-4 flex flex-col items-center justify-center gap-3 bg-gray-100 shadow-md rounded-xl hover:bg-yellow-100"
            >
              <Icon className="w-12 h-12 text-yellow-500 fill-current" />
              <p className="text-sm font-semibold">{service.label}</p>
              <button className="bg-[#F2BA1D] text-xs font-semibold text-black rounded-xl py-1 px-5">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>

      {/* Integration services */}
      <div>
        <p className="text-2xl font-semibold">Integration Services </p>
        <p className="text-[#F2BA1D] text-xs">To Get more features</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
        {integrationServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="p-4 flex flex-col items-center justify-center gap-3 bg-gray-100 shadow-md rounded-xl hover:bg-yellow-100"
            >
              <Icon className="w-12 h-12 text-yellow-500 fill-current" />
              <p className="text-sm text-center font-semibold">
                {service.label}
              </p>
              <button className="bg-[#F2BA1D] text-xs font-semibold text-black rounded-xl py-1 px-5">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
