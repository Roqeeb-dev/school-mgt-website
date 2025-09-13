import { useState } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    organization: "",
    school: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.organization) {
      newErrors.organization = "Organization name is required";
    }

    if (!form.school) {
      newErrors.school = "School name is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setUser({ ...user, form }); // Save in context
    localStorage.setItem("user", JSON.stringify(form)); // Save in localStorage
    setSubmitted(true);

    // Redirect after short delay
    setTimeout(() => {
      navigate("/auth/login"); // 👈 go to login after registration
    }, 1200);
  };

  return (
    <main className="flex flex-col gap-5">
      <div className="my-7">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-gray-600 text-sm">Please register to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="border-b focus:outline-none text-sm px-2 py-4 w-full"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Organization */}
        <div>
          <input
            type="text"
            name="organization-name"
            id="organization-name"
            placeholder="Enter your organization name"
            className="border-b focus:outline-none text-sm px-2 py-4 w-full"
            value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
          />
          {errors.organization && (
            <p className="text-red-500 text-xs mt-1">{errors.organization}</p>
          )}
        </div>

        {/* School */}
        <div>
          <input
            type="text"
            name="school-name"
            id="school-name"
            placeholder="Enter your School name"
            className="border-b focus:outline-none text-sm px-2 py-4 w-full"
            value={form.school}
            onChange={(e) => setForm({ ...form, school: e.target.value })}
          />
          {errors.school && (
            <p className="text-red-500 text-xs mt-1">{errors.school}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#F2BA1D] font-semibold p-2 rounded-2xl text-sm w-[50%] text-center hover:bg-yellow-500"
          >
            Register
          </button>
        </div>
      </form>

      {submitted && (
        <p className="text-green-600 text-sm mt-3">
          🎉 Registration successful! Redirecting...
        </p>
      )}
    </main>
  );
}
