import { useEffect, useState } from "react";
import "./GlobalStyles.scss";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList/MovieList";
import { MoviesData } from "./Interfaces/AppInterfaces";
import { DetailsModal } from "./components/DetailsModal/DetailsModal";
import { globalContext } from "./context/globalContext";

function App() {
  const [moviesData, setMoviesData] = useState<MoviesData>({
    Search: [],
    totalresults: "",
    Response: "",
  });

  const [showDetails, toggleShowDetails] = useState<boolean>(false);

  useEffect(() => {
    console.log("what we have", moviesData);
    console.log("showDetails");
  }, [moviesData]);

  return (
    <>
      <globalContext.Provider value={{ showDetails, toggleShowDetails }}>
        <Header updateData={setMoviesData}></Header>
        <MovieList list={moviesData.Search} />
        {showDetails && <DetailsModal />}
      </globalContext.Provider>
    </>
  );
}

export default App;
