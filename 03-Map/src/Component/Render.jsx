

const Render = () => {

     const numbers = [1,2,3,4,5];

    const userInfo = [
      {
        name : "Dip",
        roll : 20
      },
      {
        name : "Raj",
        roll : 10
      },
      {
        name : "Sam",
        roll : 25
      }
    ];
  return (

    <div>
       {numbers.map( (number) => (
        // eslint-disable-next-line react/jsx-key
        <ul key={number}>
            <li>{number}</li>
        </ul>
       ))}


       {
        userInfo.map( ({name,roll}) => (
          <ul key={Math.random()}>
            <li>{name}</li>
            <li>{roll}</li>
          </ul>
        ))
       }
    </div>
    
  )
}

export default Render;