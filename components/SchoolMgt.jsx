import { Search, Plus } from "lucide-react";

export default function SchoolMgt() {
  return (
    <div className="lg:p-10">
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
      <section></section>
    </div>
  );
}
