const SearchBar = ({ search, setSearch }) => (
    <input
      type="text"
      placeholder="Search city..."
      value={search}
      onChange={e => setSearch(e.target.value)}
      style={{ padding: '10px', marginBottom: '1rem', width: '60%' }}
    />
  );
  
  export default SearchBar;
  