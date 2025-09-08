export default function UserForm() {
  return (
    <form className="my-15 grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl px-4">
      {/* First name */}
      <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder="First Name"
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Last name */}
      <input
        type="text"
        name="last-name"
        id="last-name"
        placeholder="Last Name"
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Phone Number */}
      <input
        type="tel"
        name="phone-number"
        id="phone-number"
        placeholder="Phone Number"
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Role */}
      <input
        type="text"
        name="role"
        id="role"
        placeholder="Your Role"
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
      />
    </form>
  );
}
