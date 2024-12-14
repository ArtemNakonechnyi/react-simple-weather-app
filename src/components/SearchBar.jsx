import React from 'react';

function SearchBar({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder="Enter location"
      />
    </div>
  );
}

export default SearchBar;