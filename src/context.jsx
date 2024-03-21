import { useState } from "react";

const useToggle = () => {
  const [theme, setTheme] = useState(false);

  const toggle = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    document.body.classList.toggle("purple-mode", newTheme);
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

  return { theme, toggle, pageActive };
};

export default useToggle;
