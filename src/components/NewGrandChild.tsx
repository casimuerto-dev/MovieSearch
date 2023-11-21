import { useCountContext } from "./context/context";

const NewGrandChild = () => {
  const { count } = useCountContext();
  return <div>{count}</div>;
};

export { NewGrandChild };
