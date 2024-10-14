import { createContext } from "react"
import ComponentA from "./Component/COmponentA";

export const data = createContext();

const App = () => {

 
  const name = "dip";

  return (

    <data.Provider value={name}>
      <ComponentA/>
    </data.Provider>
    
  )
}

export default App