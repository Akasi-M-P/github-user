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
          ? "w-1/2 flex items-center justify-between mx-auto rounded-lg bg-blue-900 shadow-md p-4 mt-10"
          : "w-1/2 flex items-center justify-between mx-auto rounded-lg bg-white shadow-md p-4 mt-10"
      }
    >
      <section className="flex gap-5 items-center w-3/4">
        <FiSearch className="w-7 h-7 text-blue-500" />
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleUserName}
          placeholder="Search Github username..."
          className={
            darkMode
              ? "w-10/12 h-8 focus:outline-none text-white font-mono text-base font-normal leading-6 bg-blue-900"
              : "w-10/12 h-8 focus:outline-none text-black font-mono text-base font-normal leading-6"
          }
        />
      </section>
      <section className="flex gap-5 items-center">
        <p className="text-red-500 font-mono text-15 font-bold leading-normal">
          {/* No results */}
        </p>
        <button
          type="btn"
          className="w-20 h-50 pt-2 pb-2 rounded-lg bg-blue-500 hover:bg-blue-400"
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
