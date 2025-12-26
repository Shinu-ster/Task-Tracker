const SearchAndFilter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select
        className="border rounded p-2"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Pending</option>
        <option>Done</option>
      </select>

      <select
        className="border rounded p-2"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="date">By Date</option>
        <option value="title">By Title</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;
