import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
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
  const firstLoad = useRef(true);
  const timeOutId = useRef<number>();
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

  useEffect(() => {
    if (!firstLoad.current) {
      clearTimeout(timeOutId.current);
      timeOutId.current = setTimeout(() => {
        getMoviesData();
      }, 300);
    }
    firstLoad.current = false;
  }, [searchText]);

  return (
    <header>
      <h1>Look for your favorite movie</h1>
      <input
        placeholder="Avengers"
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      ></input>

      {showError && searchText.length === 0 && <h2>Search something!</h2>}
      {showError && searchText.length !== 0 && <h2>No results &#128533;</h2>}
    </header>
  );
}
