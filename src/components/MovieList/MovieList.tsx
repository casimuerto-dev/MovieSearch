import { MovieObj } from "../../Interfaces/AppInterfaces";
import { MovieCard } from "../MovieCard/MovieCard";
import "./movieList.scss";

interface MovieListProps {
  list: MovieObj[];
}

export const MovieList = (props: MovieListProps) => {
  return (
    <div className="cardGrid">
      {props.list.length > 0 &&
        props.list.map((element: MovieObj) => {
          return <MovieCard key={element.imdbID} {...element} />;
        })}
    </div>
  );
};
