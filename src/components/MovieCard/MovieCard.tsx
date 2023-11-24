import { MovieObj } from "../../Interfaces/AppInterfaces";
import "./movieCard.scss";
export function MovieCard(props: MovieObj) {
  return (
    <div className="movieCard">
      <h3>{props.Title}</h3>
      <img className="posterImage" src={props.Poster} />
      <p>Year {props.Year}</p>
    </div>
  );
}
