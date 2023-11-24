import { MovieObj } from "../../Interfaces/AppInterfaces";
import "./movieCard.scss";
export function MovieCard(props: MovieObj) {
  return (
    <div className="movieCard">
      <h3>{props.Title}</h3>
      <div className="imageDiv">
        <img
          className="posterImage"
          src={
            props.Poster !== "N/A"
              ? props.Poster
              : "https://auctions.leski.com.au/images/lot/6892/68920_xl.jpg?1692887757"
          }
        />
      </div>
      <p>Year {props.Year}</p>
    </div>
  );
}
