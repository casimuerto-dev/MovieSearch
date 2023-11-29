import "./detailsModal.scss";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/constants";
import axios from "axios";
import { responseDetails } from "../../Interfaces/AppInterfaces";

export function DetailsModal() {
  const globalObj = useGlobalContext();

  const [detailsToShow, setDetailsToShow] = useState({
    Plot: "",
    Response: "True",
  });

  const [loading, setLoading] = useState(true);

  const getMoviePlot = async (IMDBId: string) => {
    console.log("getting details");
    try {
      const response: responseDetails = await axios.get(
        `${BASE_URL}i=${IMDBId}&type=movie&plot=full`
      );

      if (response.data.Response === "False") {
        console.error("Error when fetching movie details");
      } else {
        console.log("got response", response);
        const { Plot, Response } = response.data;
        setDetailsToShow({ Plot, Response });
        setLoading(false);
      }
    } catch (error) {
      throw new Error("data request error");
    }
  };

  useEffect(() => {
    getMoviePlot(globalObj.movieDetails.data.imdbID);
  }, []);
  return (
    <>
      <div className="modalBackground"></div>
      <div className="modalInfo">
        <button
          onClick={() =>
            globalObj.toggleShowDetails((prev) => ({
              showModal: !prev.showModal,
              data: { ...prev.data },
            }))
          }
        >
          X
        </button>
        <h2>{globalObj.movieDetails.data.Title}</h2>
        <p>{globalObj.movieDetails.data.Year}</p>
        <p>{!loading ? detailsToShow.Plot : "Loading"}</p>
      </div>
    </>
  );
}
