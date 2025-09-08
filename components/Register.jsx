export default function Register() {
  return (
    <main className="flex flex-col gap-5">
      <div className="my-7">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="text-gray-600 text-sm">Please register to your account</p>
      </div>
      <form action="" className="flex flex-col gap-6">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="border-b focus:outline-none text-sm px-2 py-4"
        />
        <input
          type="text"
          name="organization-name"
          id="organization-name"
          placeholder="Enter your organization name"
          className="border-b focus:outline-none text-sm px-1 py-4"
        />
        <input
          type="text"
          name="school-name"
          id="school-name"
          placeholder="Enter your School name"
          className="border-b focus:outline-none text-sm px-1 py-4"
        />
        <div className="flex justify-end">
          <button className="bg-[#F2BA1D] font-semibold p-2 rounded-2xl text-sm w-[50%] text-center hover:bg-yellow-500">
            Register
          </button>
        </div>
      </form>
    </main>
  );
}
