import React from "react";

const Search = ( { placeholder } ) => {
  return (
    <>
      <form>
        <input type="text" minlength="5" maxlength="20" placeholder={placeholder} />
      </form>
    </>
  );
};

export default Search;
