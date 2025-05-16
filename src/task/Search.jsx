import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export default function Search({ handleSearch }) {

  const [searchTerm, setSearchTerm] = useState("");
  
  const onSearch = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  }

  return (
    <form>
      <div className="flex">
        <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search Task"
            required
          />
          <button
            onClick={onSearch}
            type="submit"
            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
          >
            <CiSearch className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}
