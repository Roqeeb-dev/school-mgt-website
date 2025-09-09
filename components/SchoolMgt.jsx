import { Search, Plus, Trash, Edit } from "lucide-react";

export default function SchoolMgt() {
  return (
    <div className="lg:p-5">
      {/* Top part */}
      <section>
        <div className="flex items-center space-x-6">
          <select
            name="session"
            id="session"
            className="border border-gray-400 px-2 py-1 text-sm w-[200px] rounded-md"
          >
            <option value="">All Sessions</option>
            <option value="">2022 - 2023</option>
            <option value="">2023 - 2024</option>
            <option value="">2024 - 2025</option>
          </select>
          <div className="flex items-center justify-between border border-gray-400 px-2 py-1 w-[200px] rounded-md text-sm ">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search sessions"
              className="placeholder:text-sm focus:outline-none w-full"
            />
            <Search className="w-3 h-3" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-medium my-3">Sessions</p>
          {/* input container */}
          <div className="flex items-center gap-5">
            {/* Session level */}
            <div className="flex items-center justify-between border border-gray-400 px-2 py-1 w-[200px] rounded-md text-sm ">
              <input
                type="text"
                name="session-level"
                id="session-level"
                placeholder="Enter Sessions Level"
                className="placeholder:text-sm focus:outline-none w-full"
              />
              <Search className="w-3 h-3" />
            </div>
            {/* Start date */}
            <input
              type="date"
              name="start-date"
              id="start-date"
              placeholder="Start Date"
              className="placeholder:text-sm focus:outline-none border border-gray-400 px-2 py-1 w-[200px] rounded-md text-sm "
            />
            {/* End date */}
            <input
              type="date"
              name="end-date"
              id="end-date"
              placeholder="End Date"
              className="placeholder:text-sm focus:outline-none border border-gray-400 px-2 py-1 w-[200px] rounded-md text-sm "
            />
            <button className="flex items-center gap-2 uppercase py-1 px-2 border border-yellow-500 text-sm font-medium rounded-md hover:bg-yellow-100">
              <Plus className="h-4 w-4" />
              Add New Sessions
            </button>
          </div>
        </div>
      </section>

      {/* Table part */}
      <section className="mt-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-sm text-gray-800 font-medium">
              <th className="p-3 text-left">S/No</th>
              <th className="p-3 text-left">Sessions</th>
              <th className="p-3 text-left">Start Date</th>
              <th className="p-3 text-left">End Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-gray-800 font-medium hover:bg-gray-50">
              <td className="p-5">1</td>
              <td className="p-3">Accounting</td>
              <td className="p-3">September 1, 2025</td>
              <td className="p-3">October 1, 2025</td>
              <td>
                <div className="flex items-center justify-start p-3 space-x-3">
                  <Trash className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                  <Edit className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                </div>
              </td>
            </tr>

            {/* Second table entry */}
            <tr className="text-sm text-gray-800 font-medium hover:bg-gray-50">
              <td className="p-5">2</td>
              <td className="p-3 ">Inventory</td>
              <td className="p-3">January 20, 2024</td>
              <td className="p-3">April 5, 2024</td>
              <td>
                <div className="flex items-center justify-start p-3 space-x-3">
                  <Trash className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                  <Edit className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                </div>
              </td>
            </tr>

            {/* Third entry */}
            <tr className="text-sm text-gray-800 font-medium hover:bg-gray-50">
              <td className="p-5">3</td>
              <td className="p-3 ">Examination</td>
              <td className="p-3">June 26, 2024</td>
              <td className="p-3">August 8, 2024</td>
              <td>
                <div className="flex items-center justify-start p-3 space-x-3">
                  <Trash className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                  <Edit className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                </div>
              </td>
            </tr>

            {/* Fourth entry */}
            <tr className="text-sm text-gray-800 font-medium hover:bg-gray-50">
              <td className="p-5">4</td>
              <td className="p-3">School Fees</td>
              <td className="p-3">June 26, 2024</td>
              <td className="p-3">August 8, 2024</td>
              <td>
                <div className="flex items-center justify-start p-3 space-x-3">
                  <Trash className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                  <Edit className="fill-yellow-500 h-5 w-5 cursor-pointer" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
