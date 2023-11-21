import {  createContext, useContext } from "react";

export type countContextInterface={
count:number
};
export const countContext = createContext<countContextInterface | null>(null);


export const useCountContext = () => {
  const count = useContext(countContext);
  if (count === null) {
    throw new Error("count context value is null")
  }
  return count;
};
