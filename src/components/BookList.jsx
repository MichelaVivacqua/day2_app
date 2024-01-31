import React, { useState } from "react";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="search">Looking for: </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="row">
        {filteredBooks.map((book) => (
          <div key={book.asin} className="col-md-2">
            <SingleBook libro={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
