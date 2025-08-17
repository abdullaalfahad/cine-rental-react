import { useContext } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./context";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`w-full h-full mx-auto ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />

          <MovieList />
        </div>
      </main>
    </div>
  );
}
