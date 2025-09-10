import { Check } from "lucide-react";

export default function AddBranch() {
  return (
    <form className="w-full bg-white p-6 rounded-xl shadow-md">
      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {/* Form row */}
          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm text-gray-700 font-medium col-span-1">
              Billing Name
            </label>
            <input
              type="text"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Organization Website</label>
            <input
              type="url"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Time-zone</label>
            <select className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full">
              <option value="">Select timezone</option>
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
              <option value="IST">IST</option>
            </select>
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Contact number</label>
            <input
              type="tel"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Registration Number</label>
            <input
              type="text"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Organization Code</label>
            <input
              type="text"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Upload Files</label>
            <input
              type="file"
              className="border border-gray-400 bg-gray-300 rounded-xl text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Address</label>
            <textarea className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"></textarea>
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">State</label>
            <select className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full">
              <option value="">Select state</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
            </select>
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">District</label>
            <select className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full">
              <option value="">Select district</option>
            </select>
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Country</label>
            <input
              type="text"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Pincode</label>
            <input
              type="text"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">Tax Number</label>
            <input
              type="text"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>

          <div className="grid grid-cols-3 items-center gap-3">
            <label className="text-sm font-medium">GST Info</label>
            <input
              type="text"
              className="border border-gray-400 text-xs rounded-md p-2 col-span-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Save button */}
      <div className="flex justify-end mt-6">
        <button
          type="submit"
          className="flex items-center gao-2 bg-[#F2BA1D] hover:bg-yellow-600 text-white font-semibold px-1 py-1 rounded-full shadow-md"
        >
          <Check className="w-5 h-5" />
          Save
        </button>
      </div>
    </form>
  );
}
