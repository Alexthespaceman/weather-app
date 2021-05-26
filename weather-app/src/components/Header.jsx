import { Link } from "@reach/router";
import { React, useEffect } from "react";
import WebFont from "webfontloader";
import SearchBar from "../components/SearchBar";
import Logo from "./Logo";

function Header(props) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Pattaya"],
      },
    });
  }, []);

  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar />
      <div className="font-loader">Welcome to the weather station!</div>
    </div>
  );
}

export default Header;
