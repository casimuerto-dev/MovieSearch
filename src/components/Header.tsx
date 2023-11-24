import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { MoviesData } from "../Interfaces/AppInterfaces";
interface responseData {
  data: MoviesData;
  response: string;
}

const API_KEY = "4287ad07";
const BASE_URL = `http://www.omdbapi.com?apikey=${API_KEY}&`;

interface Headerprops {
  updateData: Dispatch<SetStateAction<MoviesData>>;
}
export function Header(props: Headerprops) {
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [showError, setShowError] = useState(false);
  const { updateData } = props;
  const getMoviesData = async () => {
    try {
      const response: responseData = await axios.get(
        `${BASE_URL}s=${searchText}&type=movie&page=${pageNumber}`
      );

      if (response.data.Response === "False") {
        setShowError(true);
        console.error(response.data.Error);
      } else {
        setShowError(false);
        updateData(response.data);
      }
    } catch (error) {
      setShowError(true);
      throw new Error("data request error");
    }
  };

  return (
    <header>
      <p>{searchText}</p>
      <input
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      ></input>
      <button
        onClick={() => {
          getMoviesData();
        }}
      >
        Search movies
      </button>
      {showError && <h2>Ups there was an error</h2>}
    </header>
  );
}
