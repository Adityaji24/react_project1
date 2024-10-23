import { useContext } from "react";
import { MyContext } from "./App";

const Bhopal = () => {
  const context = useContext(MyContext);

  return (
    <>
      <h1>Welcome to Bhopal: Name: {context.user}</h1>
      <button onClick={() => context.setUser("Aditya")}>
        Update User
      </button>
    </>
  );
};

export default Bhopal;
