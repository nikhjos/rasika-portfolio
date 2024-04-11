import React from "react";
import { pageLinks } from "../assets/data";
import useToggle from "../context";

const Sidebar = ({ sidebar, showSidebar }) => {
  return (
    <div className={sidebar ? "sidebar showSidebar" : "sidebar"}>
      {pageLinks.map((link) => {
        const { id, href, name } = link;
        return (
          <a
            type="button"
            key={id}
            href={href}
            className="sidebarLink"
            onClick={showSidebar}
          >
            {name}
          </a>
        );
      })}
    </div>
  );
};

export default Sidebar;
