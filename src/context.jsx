import { useEffect, useState } from "react";

const getThemeFromLocal = () => {
  return localStorage.getItem("theme-store") || false;
};

const useToggle = () => {
  const [theme, setTheme] = useState(getThemeFromLocal());
  const [sidebar, setSitebar] = useState(false);

  const newTheme = !theme;

  const toggle = () => {
    setTheme(newTheme);
    document.body.classList.toggle("dark-mode", newTheme);
  };

  const showSidebar = () => {
    setSitebar(!sidebar);
  };

  const pageActive = (page) => {
    const hero = document.getElementById("hero");
    const about = document.getElementById("about");
    const skill = document.getElementById("skill");
    const contact = document.getElementById("contact");

    const newIds = [hero, about, skill, contact];

    newIds.forEach((element, index) => {
      if (index === page || page === 4) {
        removeActive();
        element.classList.add("active");
      }
    });
  };

  const removeActive = () => {
    hero.classList.remove("active");
    about.classList.remove("active");
    skill.classList.remove("active");
    contact.classList.remove("active");
  };

  return { sidebar, showSidebar };
};

export default useToggle;
