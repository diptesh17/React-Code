
const ProductInfo = () => {

   const product = {
     name : "HP",
    price : "$20",
     availability : "In Stock"

   }

  return (
   <>
   <p>Name : {product.name}</p>
   <p>Price : {product.price}</p>
   <p>Availability : {product.availability}</p>
   </>
  )
}

export default ProductInfo