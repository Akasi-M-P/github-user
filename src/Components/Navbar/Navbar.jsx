import { useContext } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../Theme/ThemeContext";

const Navbar = () => {
  const { darkMode, enableDarkMode } = useContext(ThemeContext);
  return (
    <main className="sm:w-1/2 flex items-center justify-between mx-auto">
      <section>
        <p
          className={
            darkMode
              ? "font-mono text-white text-2xl font-semibold"
              : "font-mono text-gray-900 text-2xl font-semibold"
          }
        >
          devfinder
        </p>
      </section>

      {!darkMode ? (
        <section className="flex gap-2">
          <p className="uppercase text-gray-900 font-mono text-sm tracking-wider">
            dark
          </p>
          <BsMoonStarsFill
            className="cursor-pointer"
            onClick={enableDarkMode}
          />{" "}
        </section>
      ) : (
        <section className="flex gap-2">
          <p className="uppercase text-white font-mono text-sm tracking-wider">
            light
          </p>
          <BsFillSunFill
            className="cursor-pointer text-white"
            onClick={enableDarkMode}
          />
        </section>
      )}
    </main>
  );
};
export default Navbar;
