import { useEffect, useState, useRef } from "react";
import "./GlobalStyles.scss";
import { Header } from "./components/Header/Header";
import { MovieList } from "./components/MovieList/MovieList";
import { MoviesData, SelectedDetails } from "./Interfaces/AppInterfaces";
import { DetailsModal } from "./components/DetailsModal/DetailsModal";
import { globalContext } from "./context/globalContext";

function App() {
  const [moviesData, setMoviesData] = useState<MoviesData>({
    Search: [],
    totalResults: "",
    Response: "",
  });
  const firstLoad = useRef(true);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [amountOfPages, setAmountOfPages] = useState<number>(1);
  const [movieDetails, toggleShowDetails] = useState<SelectedDetails>({
    showModal: false,
    data: { Title: "", Year: "", imdbID: "", Type: "", Poster: "" },
  });

  useEffect(() => {
    console.log("what we have", moviesData);
  }, [moviesData]);

  return (
    <>
      <globalContext.Provider
        value={{
          movieDetails,
          toggleShowDetails,
          pageNumber,
          setPageNumber,
          amountOfPages,
          setAmountOfPages,
          firstLoad,
        }}
      >
        <Header updateData={setMoviesData}></Header>
        <MovieList list={moviesData.Search} />
        {movieDetails.showModal && <DetailsModal />}
      </globalContext.Provider>
    </>
  );
}

export default App;
