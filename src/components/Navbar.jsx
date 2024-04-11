import React from "react";
import useToggle from "../context";
import { pageLinks } from "../assets/data";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = ({ sidebar, showSidebar }) => {
  return (
    <div id="navbar">
      <section className="navbar">
        <Logo />
        <div className="pagelinks">
          {pageLinks.map((link, index) => {
            const { id, href, name } = link;
            return (
              <a type="button" key={id} href={href} className="singleLink">
                {name}
              </a>
            );
          })}
        </div>

        <button type="button" className="btn" onClick={showSidebar}>
          {sidebar ? <FaTimes /> : <FaBars />}
        </button>
      </section>
    </div>
  );
};

export default Navbar;
