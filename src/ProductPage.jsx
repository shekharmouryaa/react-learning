import React, { useEffect, useState } from 'react'



const ProductPage = () => {

    //  const [count, setCount] = useState(10)
    const [products, setProducts] = useState([])

    const getAllProducts = () => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products)
            }

            )
            .catch(error => console.log("error", error))
    }



    useEffect(() => {
        getAllProducts()
        }, [])


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
                    {products.map((product, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>
                                {product.images.map(imgUul => {
                                    return <div>
                                        <img width={80} src={imgUul} alt="product" /> <br />
                                    </div>
                                }
                                )}
                                {/* {product.images.map(imgUul =>
                                    <div>
                                        <img width={80} src={imgUul} alt="product" /> <br />
                                    </div>
                                )} */}
                            </td>
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