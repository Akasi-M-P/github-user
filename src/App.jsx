import { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/SearchBar/SearchBar";
import { ThemeContext } from "./Components/Theme/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <main
        className={darkMode ? "dark-Mode h-screen pt-32" : "h-screen pt-32"}
      >
        <div>
          <Navbar />
        </div>
        <div>
          <SearchBar />
        </div>
      </main>
    </>
  );
}

export default App;
