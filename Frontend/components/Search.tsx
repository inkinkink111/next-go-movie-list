import { SearchIcon } from "lucide-react";
import React from "react";

const Search = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}) => {
  return (
    <div className="search">
      <div>
        <div className="icon">
          <SearchIcon className="text-white" />
        </div>
        <input
          className="font-roboto"
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
