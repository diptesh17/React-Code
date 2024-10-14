import {data,data1} from "../App"

const ComponentA = () => {
  return (
    <data.Consumer>
        {
            (name) => {
               return  (
                <data1.Consumer>
                    {
                        (surname) => {
                            return (
                                <h1>Name : {name} & Surname : {surname}</h1>
                            )
                        }
                    }
                </data1.Consumer>
               )
            }
        }
    </data.Consumer>
  )
}

export default ComponentA