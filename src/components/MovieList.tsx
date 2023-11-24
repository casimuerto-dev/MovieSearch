import { MovieObj } from "../Interfaces/AppInterfaces";
import { MovieCard } from "./MovieCard/MovieCard";
interface MovieListProps {
  list: MovieObj[];
}

export const MovieList = (props: MovieListProps) => {
  return (
    <>
      {props.list.length > 0 &&
        props.list.map((element: MovieObj) => {
          return <MovieCard key={element.imdbID} {...element} />;
        })}
    </>
  );
};
