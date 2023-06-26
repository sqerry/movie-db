import "./styles/main.scss";
import MovieList from "./components/MovieList.jsx";

export default function App() {
  return (
    <>
      <header className="header"></header>
      <main>
        <MovieList />
      </main>
    </>
  );
}
