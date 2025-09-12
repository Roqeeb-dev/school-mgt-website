import { Eye, FileEdit, Plus } from "lucide-react";
import { leaves as initialLeaves } from "./academicData"; // keep original data
import { useState } from "react";
import AddLeaveModal from "./AddLeaveModal";

export default function StudentLeaves() {
  const [openModal, setOpenModal] = useState(false);
  const [leaveData, setLeaveData] = useState(initialLeaves); // state to store leaves

  // function to handle adding a new leave
  const handleAddLeave = (newLeave) => {
    setLeaveData((prev) => [
      ...prev,
      { id: prev.length + 1, ...newLeave }, // auto-generate id
    ]);
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Student Leaves</h2>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4 mb-7">
        <div className="flex items-center gap-6">
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

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 border-2 border-yellow-600 uppercase text-black hover:bg-yellow-100 px-4 py-2 rounded-full text-sm font-medium"
        >
          <Plus className="h-4 w-4" /> Add New Leave
        </button>
      </div>

      {/* Modal */}
      <AddLeaveModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onAddLeave={handleAddLeave} // pass handler
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
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
            {leaveData.map((leave) => (
              <tr key={leave.id} className="hover:bg-gray-50">
                <td className="p-6">{leave.enrolment}</td>
                <td className="p-6">{leave.name}</td>
                <td className="p-6">{leave.class}</td>
                <td className="p-6">{leave.section}</td>
                <td className="p-6">{leave.reason}</td>
                <td className="p-6">{leave.leaveDate}</td>
                <td className="p-6">{leave.status}</td>
                <td className="p-6 flex gap-2">
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
