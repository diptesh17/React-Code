type UserShape = {
    name : string ,
    age : number
}
const User = ( {name,age} : UserShape ) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        
    </div>
  )
}

export default User