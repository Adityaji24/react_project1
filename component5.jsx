import { useContext } from "react";
import { MyContext } from "./src/App";

const Comp5 = () => {
  const {user} = useContext(MyContext);

  return (
    <>
      <h1>Component 5: {user}</h1>
    </>
  );
};

export default Comp5;
