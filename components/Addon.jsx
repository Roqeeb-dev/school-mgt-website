import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

export default function Addon() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-semibold">Add-On Services</p>
          <p className="text-[#F2BA1D] text-xs">To Get more features</p>
        </div>
        <div className="p-1 cursor-pointer rounded-full bg-black hover:bg-gray-800">
          <X className="text-white h-3 w-3" />
        </div>
      </div>
    </section>
  );
}
