import React, { useEffect, useState } from 'react'



const ProductPage = () => {

//  const [count, setCount] = useState(10)
 const [products, setProducts] = useState([])

 const getAllProducts = () =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.log("error", error))
 }

 useEffect( ()=>{
    getAllProducts()
    // setCount(150)
 },[])

  return (
    <div>
        <h2>ProductPage</h2>
        {/* <h1>Count : {count}</h1> */}
        <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { products.map((product,index) => 
                        <tr>
                        <td>{index+1}</td>
                        <td><img width={80} src={product.image} alt="product" /></td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.rating.rate}</td>
                        <td>{product.description}</td>
                       </tr>
                        )
                        }
                    </tbody>
                </table>
    </div>
  )
}

export default ProductPage