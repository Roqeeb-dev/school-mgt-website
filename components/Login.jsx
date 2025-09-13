import { useState } from "react";
import { useUser } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user } = useUser();
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!form.username) newErrors.username = "Username or Email is required";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    console.log(user);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    if (!user) {
      setMessage("⚠️ No registered user found. Please register first.");
      return;
    }

    if (
      form.username === user.email ||
      form.username === user.organization ||
      form.username === user.school
    ) {
      if (form.password === user.password) {
        setMessage("✅ Login successful!");
        setTimeout(() => {
          navigate("/dashboard"); // ✅ redirect to dashboard
        }, 1000);
      } else {
        setMessage("❌ Wrong password.");
      }
    } else {
      setMessage("❌ Invalid username or email.");
    }
  };

  return (
    <main className="flex flex-col gap-5">
      <div className="my-7">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-gray-600 text-sm">Please login to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Username or Email"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="border-b focus:outline-none text-sm px-2 py-4"
        />
        {errors.username && (
          <p className="text-red-500 text-xs">{errors.username}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="border-b focus:outline-none text-sm px-2 py-4"
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password}</p>
        )}

        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-black underline"
          >
            Forgot password?
          </a>
          <button
            type="submit"
            className="bg-[#F2BA1D] font-semibold p-2 rounded-2xl text-sm w-[50%] hover:bg-yellow-500"
          >
            Login
          </button>
        </div>
      </form>

      {message && (
        <p
          className={`mt-3 text-sm ${
            message.includes("✅") ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </main>
  );
}
