import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import axios from "axios";
import { MoviesData } from "../../Interfaces/AppInterfaces";
import { BASE_URL } from "../../constants/constants";
import { responseData } from "../../Interfaces/AppInterfaces";
import {
  useGlobalContext,
  getAmountOfPages,
} from "../../context/globalContext";
import "./Header.scss";

interface Headerprops {
  updateData: Dispatch<SetStateAction<MoviesData>>;
}
export function Header(props: Headerprops) {
  const [searchText, setSearchText] = useState("");
  const [showError, setShowError] = useState(false);
  const firstLoad = useRef(true);
  const timeOutId = useRef<number>();
  const { pageNumber, setPageNumber, setAmountOfPages } = useGlobalContext();
  const { updateData } = props;

  const getMoviesData = async () => {
    try {
      const response: responseData = await axios.get(
        `${BASE_URL}s=${searchText}&type=movie&page=${pageNumber}`
      );
      console.log("DATA BABY", response);
      if (response.data.Response === "False") {
        setShowError(true);
        updateData({ Search: [], totalResults: "", Response: "" });
        setAmountOfPages(0);
        console.error(response.data.Error);
      } else {
        setShowError(false);
        setAmountOfPages(
          getAmountOfPages(parseInt(response.data.totalResults, 10))
        );

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
  }, [searchText, pageNumber]);

  return (
    <header className="header">
      <h1 className="mainTitle">Look for your favorite movie</h1>
      <input
        className="titleInput"
        placeholder="Avengers"
        onChange={(event) => {
          setPageNumber(1);
          setSearchText(event.target.value);
        }}
        value={searchText}
      ></input>

      {showError && searchText.length === 0 && (
        <h2 className="headerMessage">Search something!</h2>
      )}
      {showError && searchText.length !== 0 && (
        <h2 className="headerMessage">No results &#128533;</h2>
      )}
    </header>
  );
}
