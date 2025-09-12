import { Eye, FileEdit } from "lucide-react";

export default function StudentLeaves() {
  const leaves = [
    {
      id: 1,
      enrolment: "25143",
      name: "Rajdeep Dutt",
      class: "XII",
      section: "C",
      reason: "Fever",
      leaveDate: "21/09 to 12/10",
      status: "Active",
    },
    {
      id: 2,
      enrolment: "25144",
      name: "Anita Kumar",
      class: "XI",
      section: "B",
      reason: "Family Emergency",
      leaveDate: "15/08 to 20/08",
      status: "Active",
    },
    {
      id: 3,
      enrolment: "25145",
      name: "Arjun Mehta",
      class: "X",
      section: "A",
      reason: "Surgery",
      leaveDate: "01/07 to 10/07",
      status: "Inactive",
    },
  ];

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Student Leaves</h2>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium">
          + Add New Leave
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-4">
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>2022-2023</option>
          <option>2023-2024</option>
        </select>
        <input
          type="text"
          placeholder="Search Student"
          className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-gray-100 text-gray-700 font-medium">
            <tr>
              <th className="p-3 text-left">Enrolment Number</th>
              <th className="p-3 text-left">Student Name</th>
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Section</th>
              <th className="p-3 text-left">Reason</th>
              <th className="p-3 text-left">Leave Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{leave.enrolment}</td>
                <td className="p-3">{leave.name}</td>
                <td className="p-3">{leave.class}</td>
                <td className="p-3">{leave.section}</td>
                <td className="p-3">{leave.reason}</td>
                <td className="p-3">{leave.leaveDate}</td>
                <td className="p-3">{leave.status}</td>
                <td className="p-3 flex gap-2">
                  <button className="text-yellow-500 hover:text-yellow-600">
                    <Eye size={18} />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-600">
                    <FileEdit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
