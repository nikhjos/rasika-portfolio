import React from "react";
import { pageLinks, socialLinks } from "../assets/data";
import useToggle from "../context";

const Sidebar = () => {
  const { sidebar } = useToggle();

  return (
    <div className={sidebar ? "sidebar showSidebar" : "sidebar"}>
      {pageLinks.map((link, index) => {
        const { id, href, name } = link;
        return (
          <a type="button" key={id} href={href} className="sidebarLink">
            {name}
          </a>
        );
      })}
    </div>
  );
};

export default Sidebar;
