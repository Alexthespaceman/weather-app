import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <label>
            Search for Weather in a particular Country:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
