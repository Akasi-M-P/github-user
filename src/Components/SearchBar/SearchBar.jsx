import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "../Theme/ThemeContext";
import { UserContext } from "../UserContext/UserContext";

const SearchBar = () => {
  // Get darkMode, error, userName, handleUserName, and setUserName from respective contexts
  const { darkMode } = useContext(ThemeContext);
  const { error, userName, handleUserName, setUserName } =
    useContext(UserContext);


    const handleSearch = () => {
      handleUserName(); // Call the function to fetch data
      setUserName(""); // Clear the input field
    };

    return (
      <main
        className={
          darkMode
            ? "w-full md:w-11/12 lg:w-10/12 2xl:lg:w-9/12 flex items-center justify-between mx-auto rounded-lg bg-blue-900 shadow-md p-2 mt-6"
            : "w-full md:w-11/12 lg:w-10/12 2xl:lg:w-9/12 flex items-center justify-between mx-auto rounded-lg bg-white shadow-md p-2 mt-6"
        }
      >
        <section className="flex gap-5 items-center w-3/4">
          <FiSearch className="w-5 h-5 md:w-7 md:h-8 lg:w-10 lg:h-10 text-blue-500" />
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Search Github username..."
            className={
              darkMode
                ? "w-10/12 h-8 focus:outline-none text-white font-mono text-xs md:text-base lg:text-xl font-normal leading-6 bg-blue-900"
                : "w-10/12 h-8 focus:outline-none text-black font-mono text-xs md:text-base lg:text-xl font-normal leading-6"
            }
          />
        </section>
        <section className="flex gap-2 items-center">
          <p className="text-red-500 font-mono text-xs w-20">
            {error ? " No results" : ""}
          </p>
          <button
            type="button"
            onClick={handleSearch}
            className="w-16 text-sm lg:w-24 pt-2 pb-2 md:pt-3 md:pb-3 lg:pt-5 lg:pb-5 lg:px-5 lg:text-lg rounded-lg bg-blue-500 hover:bg-blue-400"
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
