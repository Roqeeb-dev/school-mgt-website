export default function Login() {
  return (
    <main className="flex flex-col gap-5">
      <div className="my-7">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-gray-600 text-sm">Please login to your account</p>
      </div>
      <form action="" className="flex flex-col gap-6">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username or Email"
          className="border-b focus:outline-none text-sm px-2 py-4"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="border-b focus:outline-none text-sm px-2 py-4"
        />
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-sm text-gray-600 hover:text-black underline"
          >
            Forgot password?
          </a>
          <button className="bg-[#F2BA1D] font-semibold p-2 rounded-2xl text-sm w-[50%] text-center hover:bg-yellow-500">
            Login
          </button>
        </div>
        <button className="bg-gray-200 p-2 rounded-3xl text-sm transition-bg duration-300 hover:bg-black hover:text-white">
          Register your School in Our Apps
        </button>
        <a
          href="#"
          className="text-center text-xs text-gray-600 hover:text-black"
        >
          Terms and Conditions & Privacy Policy
        </a>
      </form>
    </main>
  );
}
