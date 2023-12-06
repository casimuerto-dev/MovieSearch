import { MovieObj } from "../../Interfaces/AppInterfaces";
import { MovieCard } from "../MovieCard/MovieCard";
import { useGlobalContext } from "../../context/globalContext";
import "./movieList.scss";

interface MovieListProps {
  list: MovieObj[];
}

export const MovieList = (props: MovieListProps) => {
  const { pageNumber, setPageNumber, amountOfPages } = useGlobalContext();
  return (
    <div className="cardGrid">
      {props.list.length > 0 &&
        props.list.map((element: MovieObj) => {
          return <MovieCard key={element.imdbID} {...element} />;
        })}
      {!!amountOfPages && (
        <div>
          <button
            disabled={pageNumber === 1}
            onClick={() => {
              setPageNumber((prevPageNumber) => prevPageNumber - 1);
            }}
          >
            Prev Page
          </button>
          <span>{`${pageNumber}/${amountOfPages}`}</span>
          <button
            disabled={pageNumber === amountOfPages}
            onClick={() => {
              setPageNumber((prevPageNumber) => prevPageNumber + 1);
            }}
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};
