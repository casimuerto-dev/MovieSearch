import { Dispatch, SetStateAction, createContext, useContext,  } from "react";
import { SelectedDetails } from "../Interfaces/AppInterfaces";

type contextObj={
movieDetails:SelectedDetails,
toggleShowDetails:Dispatch<SetStateAction<SelectedDetails>>
}

export const globalContext=createContext<contextObj|null>(null)

export const useGlobalContext=()=>{
    const globalObj=useContext(globalContext);
    if(!globalObj){throw new Error("useGlobalContext must be used within a provider!!!")}
    return globalObj
}