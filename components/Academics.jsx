export default function Academics() {
  const academicsData = [
    { label: "Class", to: "" },
    { label: "Sections", to: "" },
    { label: "Subjects", to: "" },
    { label: "Timetable", to: "" },
    { label: "Attendance", to: "" },
    { label: "Student Leaves", to: "" },
    { label: "Study Materials", to: "" },
    { label: "Homework", to: "" },
    { label: "Notice Board", to: "" },
    { label: "Events", to: "" },
    { label: "Live Classes (Go pro)", to: "" },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
      {academicsData.map((entry) => {
        return (
          <div className="p-4 shadow-xl flex flex-col gap-4 border border-gray-300 rounded-xl">
            <p className="font-semibold text-lg">{entry.label}</p>
            <div className="flex items-center space-x-2 text-sm font-semibold w-full">
              <button className="bg-[#F2BA1D] text-white p-1 rounded-xl text-center w-1/2">
                View
              </button>
              <button className="p-1 rounded-xl border border-[#F2BA1D] text-[#F2BA1D] text-center w-1/2">
                Add now
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}
