import React from "react";

const Search = ( { placeholder } ) => {
  return (
    <>
      <form>
        <input type="text" placeholder={placeholder} />
      </form>
    </>
  );
};

export default Search;
