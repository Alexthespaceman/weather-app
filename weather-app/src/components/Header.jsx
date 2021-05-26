import { Link } from "@reach/router";
import React from "react";
import SearchBar from "../components/SearchBar";
import Logo from "./Logo";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      hello, I am the header
      <SearchBar />
    </div>
  );
}

export default Header;
