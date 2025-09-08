export default function Finished() {
  return (
    <div className="my-4">
      <h1 className="text-3xl font-semibold mb-6">Almost Done</h1>
      <input
        type="text"
        name="licence"
        id="licence"
        placeholder="Enter licence Number"
        className="w-[300px] p-3 placeholder:text-gray-500 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F2BA1D] transition"
      />

      <button className="my-6 font-medium text-sm block p-2 border border-[#F2BA1D] text-[#F2BA1D] uppercase rounded-xl sm:w-[200px] transition-all duration-300 ease-in-out hover:bg-[#d89d12] hover:text-white hover:shadow-lg hover:scale-105">
        Activate
      </button>

      <p className="text-xs text-gray-500">
        Check your mail and paste code. Don't forget to check your spam folder
      </p>
    </div>
  );
}
