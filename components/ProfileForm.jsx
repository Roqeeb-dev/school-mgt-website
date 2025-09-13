import { useState } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    address: "",
    gender: "",
    pincode: "",
    state: "",
    district: "",
    phone: "",
    taxNumber: "",
    registrationNo: "",
    email: "",
    dob: "",
    bloodGroup: "",
    abilities: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API/localStorage
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl bg-white p-6 md:p-10 rounded-lg shadow"
    >
      {/* Top: Profile Photo */}
      <div className="flex flex-col items-center md:items-start md:flex-row gap-6 mb-8">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <label className="flex flex-col text-sm font-medium">
          Upload Photo
          <input type="file" className="hidden" />
          <button
            type="button"
            className="mt-2 px-4 py-1 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Choose Media
          </button>
        </label>
      </div>

      {/* Two-column grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Student Name"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            placeholder="Mother's Name"
            className="border px-3 py-2 rounded-md w-full"
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            rows="2"
            className="border px-3 py-2 rounded-md w-full"
          />
          {/* Gender */}
          <div>
            <p className="text-sm font-medium mb-2">Gender</p>
            <div className="flex gap-4">
              {["Male", "Female", "Others"].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="border px-3 py-2 rounded-md w-full"
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md w-full"
          >
            <option value="">Select State</option>
            <option value="State 1">State 1</option>
            <option value="State 2">State 2</option>
          </select>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="District"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone No."
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            name="taxNumber"
            value={formData.taxNumber}
            onChange={handleChange}
            placeholder="Tax Number"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            name="registrationNo"
            value={formData.registrationNo}
            onChange={handleChange}
            placeholder="Registration No."
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
            className="border px-3 py-2 rounded-md w-full"
          />
          <input
            type="text"
            name="abilities"
            value={formData.abilities}
            onChange={handleChange}
            placeholder="Any Abilities"
            className="border px-3 py-2 rounded-md w-full"
          />
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full"
        >
          ✔ Save
        </button>
      </div>
    </form>
  );
}
