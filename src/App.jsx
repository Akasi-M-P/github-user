import { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import { ThemeContext } from "./Components/Theme/ThemeContext";
import UserCard from "./Components/UserCard/UserCard";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <main
        className={
          darkMode ? "dark-Mode h-screen pt-14" : "h-screen bg-blue-100 pt-14"
        }
      >
        <div className="px-5">
          <Navbar />
        </div>
        <div className="px-5">
          <SearchBar />
        </div>
        <div className="px-5">
          <UserCard />
        </div>
      </main>
    </>
  );
}

export default App;
