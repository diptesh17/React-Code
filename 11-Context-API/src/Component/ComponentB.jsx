import { useContext } from "react";
import { data ,data1 } from "../App";


const ComponentB = () => {

    const name = useContext(data);
    const surname = useContext(data1);

  return (
    <>
    <h1>Name : {name}</h1>
    <h2>Surname : {surname}</h2>
    </>
  )
}

export default ComponentB