import { createContext, useContext, useState } from "react";

type contextObj={
showDetails:boolean,
toggleShowDetails:React.Dispatch<React.SetStateAction<boolean>>
}

export const globalContext=createContext<contextObj|null>(null)

export const useGlobalContext=()=>{
    const globalObj=useContext(globalContext);
    if(!globalObj){throw new Error("useGlobalContext must be used within a provider!!!")}
    return globalObj
}