import { academicData } from "./academicData";
import { Plus } from "lucide-react";

export default function AcademicDashboard() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {academicData.map((entry, index) => (
        <div
          key={index}
          className="p-6 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 rounded-2xl flex flex-col justify-between"
        >
          {/* Label */}
          <p className="font-semibold text-lg text-gray-800">{entry.label}</p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button className="bg-[#F2BA1D] hover:bg-[#d89d12] text-white px-4 py-2 rounded-xl text-sm font-semibold w-1/2 transition">
              View
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 rounded-xl border border-[#F2BA1D] text-[#F2BA1D] hover:bg-[#fff7e0] text-sm font-semibold w-1/2 transition">
              <Plus className="h-5 w-5" />
              Add New
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
