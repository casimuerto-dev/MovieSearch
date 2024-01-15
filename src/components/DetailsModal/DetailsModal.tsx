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
    Poster: "",
  });

  const [loading, setLoading] = useState(true);

  const getMoviePlot = async (IMDBId: string) => {
    try {
      const response: responseDetails = await axios.get(
        `${BASE_URL}i=${IMDBId}&type=movie&plot=full`
      );

      if (response.data.Response === "False") {
        console.error("Error when fetching movie details");
      } else {
        const { Plot, Response, Poster } = response.data;
        setDetailsToShow({ Plot, Response, Poster });

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
      <div
        id="detailsBackgorund"
        className="modalBackground intro"
        style={{
          backgroundImage: `url(${detailsToShow.Poster})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="modalPositionDiv">
          <div className="modalInfo">
            <div className="modalTitleDiv">
              <button
                className="modalButton-close"
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
            </div>
            <p className="modalPlot">
              {!loading ? detailsToShow.Plot : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
