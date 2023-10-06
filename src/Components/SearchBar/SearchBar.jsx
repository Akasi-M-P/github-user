import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "../Theme/ThemeContext";

const SearchBar = () => {
  const { darkMode } = useContext(ThemeContext);
  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <main
      className={
        darkMode
          ? "w-11/12 md:w-11/12 flex items-center justify-between mx-auto rounded-lg bg-blue-900 shadow-md p-4 mt-6"
          : "w-11/12  md:w-11/12 flex items-center justify-between mx-auto rounded-lg bg-white shadow-md p-4 mt-6"
      }
    >
      <section className="flex gap-5 items-center w-3/4">
        <FiSearch className="w-5 h-5 md:w-7 md:h-8 lg:w-10 lg:h-10 text-blue-500" />
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleUserName}
          placeholder="Search Github username..."
          className={
            darkMode
              ? "w-11/12 h-8 focus:outline-none text-white font-mono text-xs md:text-base lg:text-xl font-normal leading-6 bg-blue-900"
              : "w-11/12 h-8 focus:outline-none text-black font-mono text-xs md:text-base lg:text-xl font-normal leading-6"
          }
        />
      </section>
      <section className="flex gap-5 items-center">
        <p className="text-red-500 font-mono text-15 font-bold leading-normal">
          {/* No results */}
        </p>
        <button
          type="btn"
          className="w-16 text-sm lg:w-24 pt-2  pb-2 md:pt-3 md:pb-3 lg:pt-5 lg:pb-5 lg:px-5 lg:text-lg rounded-lg bg-blue-500 hover:bg-blue-400"
        >
          <p className="text-white font-mono text-16 font-bold leading-normal">
            Search
          </p>
        </button>
      </section>
    </main>
  );
};
export default SearchBar;
