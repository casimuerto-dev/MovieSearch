import "./detailsModal.scss";
import { useGlobalContext } from "../../context/globalContext";
import { useEffect } from "react";

// const getMoviePlot=async()=>{
//     const response: responseData = await axios.get(
//         `${BASE_URL}s=${searchText}&type=movie&page=${pageNumber}`
//       );
// }

export function DetailsModal() {
  const globalObj = useGlobalContext();

  useEffect(() => {}, []);

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
      </div>
    </>
  );
}
