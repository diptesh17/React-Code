const Greeting = () => {

    const name = "Dip";
    const date = new Date ();
    
  return (
    <>
    <h1> Name : {name}</h1>
    <p>Date : {date.getDate()}</p>
    </>
  )
}

export default Greeting;