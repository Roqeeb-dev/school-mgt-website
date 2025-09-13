import { mySchoolDashboardData as data } from "./academicData";
import { NavLink } from "react-router-dom";

export default function MySchoolDashboard() {
  return (
    <section>
      <h1 className="font-semibold text-xl my-3">Delhi Public School</h1>
      {/* Boxes */}
      <article className="flex">
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((box, index) => {
            const Icon = box.icon;
            return (
              <div
                key={index}
                className="bg-white flex flex-col items-center justify-center gap-3 rounded-2xl shadow-xl p-6 hover:bg-yellow-100 transition-transform duration-300 cursor-pointer"
              >
                <div className="bg-yellow-500 rounded-full p-5 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="font-semibold text-gray-700 text-lg">
                  {box.label}
                </p>
              </div>
            );
          })}
        </div>
        <div class="hidden md:flex justify-center bg-[#F2BA1D] m-1 text-center text-black font-semibold p-1 shadow-md [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)] [writing-mode:vertical-rl] rotate-180">
          <NavLink to="/dashboard/addon">Addon Services</NavLink>
        </div>
      </article>
    </section>
  );
}
