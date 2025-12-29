const SearchAndFilter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="flex gap-6 mb-4 items-center">
      {/* Filter by Status */}
      <p className="text-[#5A7ACD] hidden sm:block">Filter By Status:</p>
      <select
        className="border rounded p-2"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="" disabled hidden>
          Select status
        </option>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>

      {/* Sort */}
      <p className="text-[#5A7ACD] hidden sm:block">Sort By:</p>
      <select
        className="border rounded p-2"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="" disabled hidden>
          Select sort
        </option>
        <option value="date">By Date</option>
        <option value="title">By Title</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;
