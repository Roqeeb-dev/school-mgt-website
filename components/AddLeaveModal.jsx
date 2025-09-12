import { X } from "lucide-react";
import { useState } from "react";

export default function AddLeaveModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({
    class: "",
    section: "",
    student: "",
    reason: "",
    leaveType: "multiple",
    startDate: "",
    endDate: "",
    status: "unapproved",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form); // send data back to parent
    onClose(); // close modal
    setForm({
      class: "",
      section: "",
      student: "",
      reason: "",
      leaveType: "multiple",
      startDate: "",
      endDate: "",
      status: "unapproved",
    });
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-8 relative">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Leave</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Select Class */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Class
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={form.class}
              onChange={(e) => setForm({ ...form, class: e.target.value })}
            >
              <option value="">Select Class</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
          </div>

          {/* Select Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Section
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={form.section}
              onChange={(e) => setForm({ ...form, section: e.target.value })}
            >
              <option value="">Select Section</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          {/* Select Student */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Student
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={form.student}
              onChange={(e) => setForm({ ...form, student: e.target.value })}
            >
              <option value="">Select Student</option>
              <option value="Rajdeep Dutt">Rajdeep Dutt</option>
              <option value="Anita Kumar">Anita Kumar</option>
              <option value="Arjun Mehta">Arjun Mehta</option>
            </select>
          </div>

          {/* Leave Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number Of Leave Days
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="leaveType"
                  value="single"
                  checked={form.leaveType === "single"}
                  onChange={(e) =>
                    setForm({ ...form, leaveType: e.target.value })
                  }
                />
                Single Day
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="leaveType"
                  value="multiple"
                  checked={form.leaveType === "multiple"}
                  onChange={(e) =>
                    setForm({ ...form, leaveType: e.target.value })
                  }
                />
                Multiple Days
              </label>
            </div>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            />
          </div>

          {/* Reason */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              rows="3"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="approved"
                  checked={form.status === "approved"}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                />
                Approved
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="unapproved"
                  checked={form.status === "unapproved"}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                />
                Unapproved
              </label>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-end gap-4 mt-8">
            <button
              type="button"
              className="px-6 py-2 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-50"
              onClick={() =>
                setForm({
                  class: "",
                  section: "",
                  student: "",
                  reason: "",
                  leaveType: "multiple",
                  startDate: "",
                  endDate: "",
                  status: "unapproved",
                })
              }
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
              Add Leave
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
