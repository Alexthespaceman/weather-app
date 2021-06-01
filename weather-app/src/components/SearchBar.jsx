import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <form>
          <label>
            Search all Weather
            <input className="text-box" type="text" name="name" />
          </label>
          <input className="text-box" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
