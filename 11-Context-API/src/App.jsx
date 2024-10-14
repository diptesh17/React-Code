import { createContext } from "react"
import ComponentA from "./Component/COmponentA";

export const data = createContext();
export const data1 = createContext();


const App = () => {

 
  const name = "dip";
  const surname = "deore";

  return (

    <data.Provider value={name}>
      <data1.Consumer value={surname}>
      <ComponentA/>
      </data1.Consumer>
    </data.Provider>
    
  )
}

export default App