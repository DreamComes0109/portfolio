import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkside from "../hooks/useDarkSide";

const Switcher = () => {
  const { colorTheme, setTheme } = useDarkside();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
};

export default Switcher;
