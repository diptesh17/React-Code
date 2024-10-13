import { useState } from "react"



const App = () => {

  const [friends , setFriends] = useState(['Alex' , 'John']);

  const [ counter , setCounter] = useState(0);

  const handler = () =>{
    setCounter(counter+1);
  }

  const addNew = () =>
  {
    return setFriends([...friends , "Ronyy"]);
  }

  const removeOne = () =>
    {
      return setFriends( friends.filter( (f) => f !== 'John'));
    }

    const updateOne = () =>
      {
        return setFriends( friends.map( f => f === "Alex" ? "Alex Bhai" :f));
      }


  return (
    <>
    <button onClick={handler}>Current Count : { counter}</button>
    {
      friends.map( f => (
        <li key={Math.random}>{f}</li>
      ))
    }
    <button onClick={addNew}>Add a friend</button>
    <button onClick={removeOne}>Remove a friend</button>
    <button onClick={updateOne}>Update a friend</button>
    </>
  )
}

export default App