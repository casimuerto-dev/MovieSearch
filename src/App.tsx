import { useEffect, useState } from "react";
import "./GlobalStyles.scss";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { MoviesData } from "./Interfaces/AppInterfaces";

function App() {
  const [moviesData, setMoviesData] = useState<MoviesData>({
    Search: [],
    totalresults: "",
    Response: "",
  });

  useEffect(() => {
    console.log("what we have", moviesData);
  }, [moviesData]);
  return (
    <>
      <Header updateData={setMoviesData}></Header>
      <MovieList list={moviesData.Search} />
    </>
  );
}

export default App;
