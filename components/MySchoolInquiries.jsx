import { schoolBoxes } from "./academicData";

export default function MySchoolInquiries() {
  return (
    <section>
      <div className="flex flex-col">
        <p className="text-lg font-medium my-3">All User Inquiries</p>
        {/* Input fields */}
        <div className="flex items-center gap-4 text-xs mb-10">
          <select
            name="session"
            id="session"
            className="border border-gray-400 p-2 w-[200px] rounded-md"
          >
            <option value="">Filter by date</option>
            <option value="">2022 - 2023</option>
            <option value="">2023 - 2024</option>
          </select>

          <input
            type="text"
            name="student-name"
            id="student-name"
            placeholder="Student Name"
            className="focus:outline-none border border-gray-400 p-2 w-[200px] rounded-md  "
          />

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search by enquiry"
            className="focus:outline-none border border-gray-400 p-2 w-[200px] rounded-md  "
          />

          <select
            name="session"
            id="session"
            className="border border-gray-400 p-2 w-[200px] rounded-md"
          >
            <option value="">Filter</option>
            <option value="">2022 - 2023</option>
            <option value="">2023 - 2024</option>
          </select>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {schoolBoxes.map((box, index) => {
            const Icon = box.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 flex flex-col items-center justify-center gap-3 rounded-2xl shadow-lg p-6 hover:bg-yellow-100 transition-transform duration-300 cursor-pointer"
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
      </div>
    </section>
  );
}
