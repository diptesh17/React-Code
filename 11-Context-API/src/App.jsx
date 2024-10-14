import { createContext } from "react"
import ComponentB from "./Component/ComponentB";

export const data = createContext();
export const data1 = createContext();


const App = () => {

 
  const name = "dip";
  const surname = "deore";

  return (

    <data.Provider value={name}>
      <data1.Provider value={surname}>
      <ComponentB/>
      </data1.Provider>
    </data.Provider>
    
  )
}

export default App