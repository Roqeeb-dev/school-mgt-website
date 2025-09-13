import { useState } from "react";
import { useUser } from "../context/userContext";

export default function UserForm() {
  const { setUser } = useUser();
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    password: "",
  });

  // Basic validation
  const validate = () => {
    let newErrors = {};

    if (!userData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!userData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!userData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!userData.role.trim()) newErrors.role = "Role is required";
    if (!userData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if validation fails

    // Save to context
    setUser(userData);

    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("User data saved successfully!");
  };

  return (
    <form
      id="user-form"
      onSubmit={handleSubmit}
      className="my-15 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl px-4"
    >
      {/* First name */}
      <div>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="First Name"
          onChange={(e) =>
            setUserData({ ...userData, firstName: e.target.value })
          }
          value={userData.firstName}
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition w-full"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs">{errors.firstName}</p>
        )}
      </div>

      {/* Last name */}
      <div>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
          onChange={(e) =>
            setUserData({ ...userData, lastName: e.target.value })
          }
          value={userData.lastName}
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition w-full"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs">{errors.lastName}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          value={userData.email}
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition w-full"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          placeholder="Phone Number"
          onChange={(e) =>
            setUserData({ ...userData, phoneNumber: e.target.value })
          }
          value={userData.phoneNumber}
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition w-full"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Role */}
      <div>
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Your Role"
          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
          value={userData.role}
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition w-full"
        />
        {errors.role && <p className="text-red-500 text-xs">{errors.role}</p>}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
          className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password}</p>
        )}
      </div>
    </form>
  );
}
