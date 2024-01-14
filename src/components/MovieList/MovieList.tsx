import { MovieObj } from "../../Interfaces/AppInterfaces";
import { MovieCard } from "../MovieCard/MovieCard";
import { useGlobalContext } from "../../context/globalContext";
import "./movieList.scss";
import { useEffect, useRef } from "react";

interface MovieListProps {
  list: MovieObj[];
}

export const MovieList = (props: MovieListProps) => {
  const { pageNumber, setPageNumber, amountOfPages, firstLoad } =
    useGlobalContext();
  const timeOutId = useRef<number>();

  useEffect(() => {
    if (timeOutId.current) clearTimeout(timeOutId.current);
    document.getElementById("paginationSpan")?.classList.add("change");

    timeOutId.current = setTimeout(() => {
      document.getElementById("paginationSpan")?.classList.remove("change");
    }, 300);
  }, [pageNumber]);

  return (
    <>
      <div className="cardGrid">
        {props.list.length > 0 &&
          props.list.map((element: MovieObj) => {
            return <MovieCard key={element.imdbID} {...element} />;
          })}
      </div>
      {!!amountOfPages && !firstLoad.current && (
        <div className="paginationButtonContainer">
          <button
            className="paginationButton"
            disabled={pageNumber === 1}
            onClick={() => {
              setPageNumber((prevPageNumber) => prevPageNumber - 1);
            }}
          >
            Prev Page
          </button>
          <span id="paginationSpan">{`${pageNumber}/${amountOfPages}`}</span>
          <button
            className="paginationButton"
            disabled={pageNumber === amountOfPages}
            onClick={() => {
              setPageNumber((prevPageNumber) => prevPageNumber + 1);
            }}
          >
            Next Page
          </button>
        </div>
      )}
    </>
  );
};
