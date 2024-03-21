import React from "react";
import useToggle from "../context";
import { pageLinks } from "../assets/data";
import Purple from "./Purple";
import White from "./White";

const Navbar = () => {
  const { theme, toggle, pageActive } = useToggle();

  return (
    <section className="active">
      <div id="navbar">
        <div className="navbar">
          <div className="logo">
            <p>RJ</p>
          </div>
          <div className="pagelinks">
            {pageLinks.map((link, index) => {
              const { id, href, name } = link;
              return (
                <button
                  type="button"
                  key={id}
                  href={href}
                  className="singleLink"
                  onClick={() => pageActive(index)}
                >
                  {name}
                </button>
              );
            })}
          </div>

          <div className="theme">
            <button type="button" onClick={toggle}>
              {theme ? <White /> : <Purple />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
