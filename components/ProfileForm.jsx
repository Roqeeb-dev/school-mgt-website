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
    console.log(formData);
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
          className="w-24 h-24 bg-gray-100 rounded-full object-cover"
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
          {[
            { label: "Student Name", name: "studentName", type: "text" },
            { label: "Father's Name", name: "fatherName", type: "text" },
            { label: "Mother's Name", name: "motherName", type: "text" },
          ].map((field) => (
            <div key={field.name} className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="flex-1 border px-3 py-1 rounded-md"
              />
            </div>
          ))}

          {/* Address */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-sm font-medium mt-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="2"
              className="flex-1 border px-3 py-1 rounded-md"
            />
          </div>

          {/* Gender */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-medium">Gender</label>
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

          {/* Pincode */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-medium">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="flex-1 border px-3 py-1 rounded-md"
            />
          </div>

          {/* State */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-medium">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="flex-1 border px-3 py-1 rounded-md"
            >
              <option value="">Select State</option>
              <option value="State 1">State 1</option>
              <option value="State 2">State 2</option>
            </select>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {[
            { label: "District", name: "district", type: "text" },
            { label: "Phone No.", name: "phone", type: "tel" },
            { label: "Tax Number", name: "taxNumber", type: "text" },
            { label: "Registration No.", name: "registrationNo", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Blood Group", name: "bloodGroup", type: "text" },
            { label: "Any Abilities", name: "abilities", type: "text" },
          ].map((field) => (
            <div key={field.name} className="flex items-center gap-4">
              <label className="w-32 text-sm font-medium">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="flex-1 border px-3 py-1 rounded-md"
              />
            </div>
          ))}
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
