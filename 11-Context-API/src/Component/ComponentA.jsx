import {data} from "../App"

const ComponentA = () => {
  return (
    <data.Consumer>
        {
            (name) => {
               return  <h1>{name}</h1>
            }
        }
    </data.Consumer>
  )
}

export default ComponentA