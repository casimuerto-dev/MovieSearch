import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { SelectedDetails } from "../Interfaces/AppInterfaces";

type contextObj = {
  movieDetails: SelectedDetails;
  toggleShowDetails: Dispatch<SetStateAction<SelectedDetails>>;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
  amountOfPages: number;
  setAmountOfPages: Dispatch<SetStateAction<number>>;
  firstLoad: React.MutableRefObject<boolean>;
};

export const getAmountOfPages = (amountOfResults: number) => {
  return Math.ceil(amountOfResults / 10);
};

export const globalContext = createContext<contextObj | null>(null);

export const useGlobalContext = () => {
  const globalObj = useContext(globalContext);
  if (!globalObj) {
    throw new Error("useGlobalContext must be used within a provider!!!");
  }
  return globalObj;
};
