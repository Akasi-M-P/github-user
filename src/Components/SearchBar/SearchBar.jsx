import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "../Theme/ThemeContext";
import { UserContext } from "../UserContext/UserContext"; // Import UserContext

const SearchBar = () => {
  const { darkMode } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext); // Access setUser from UserContext
  const [userName, setUserName] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const userData = await response.json();
      console.log(userData);
      setUser(userData); // Set user data using the setUser function
    } catch (error) {
      console.error(error);
      setUser(null); // Set user data to null in case of an error
    }
  };

  return (
    <main
      className={`w-11/12 md:w-11/12 lg:w-10/12 2xl:lg:w-9/12 flex items-center justify-between mx-auto rounded-lg ${
        darkMode ? "bg-blue-900" : "bg-white"
      } shadow-md p-4 mt-6`}
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
