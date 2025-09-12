import userContext from "../context/userContext";
import { useContext, useState } from "react";

export default function UserForm() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    password: "",
  });
  return (
    <form className="my-15 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl px-4">
      {/* First name */}
      <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder="First Name"
        onChange={(e) => {
          setUserData({ ...userData, firstName: e.target.value });
        }}
        value={userData.firstName}
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Last name */}
      <input
        type="text"
        name="last-name"
        id="last-name"
        placeholder="Last Name"
        onChange={(e) => {
          setUserData({ ...userData, lastName: e.target.value });
        }}
        value={userData.lastName}
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        onChange={(e) => {
          setUserData({ ...userData, email: e.target.value });
        }}
        value={userData.email}
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Phone Number */}
      <input
        type="tel"
        name="phone-number"
        id="phone-number"
        placeholder="Phone Number"
        onChange={(e) => {
          setUserData({ ...userData, phoneNumber: e.target.value });
        }}
        value={userData.phoneNumber}
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Role */}
      <input
        type="text"
        name="role"
        id="role"
        placeholder="Your Role"
        onChange={(e) => {
          setUserData({ ...userData, role: e.target.value });
        }}
        value={userData.role}
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={(e) => {
          setUserData({ ...userData, password: e.target.value });
        }}
        value={userData.password}
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />
    </form>
  );
}
