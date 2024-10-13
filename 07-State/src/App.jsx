import { useState } from "react"



const App = () => {

  const [ counter , setCounter] = useState(0);

  const handler = () =>{
    setCounter(counter+1);
  }

  return (
    <button onClick={handler}>Current Count : { counter}</button>
  )
}

export default App