import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddProducts = () => {

    const newProduct = {
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    }
    const [form, setForm] = useState(newProduct)

    const addProduct = (e) => {
        e.preventDefault()
        fetch('https://fakestoreapi.com/products', {
            method: "PUT",
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then(json => {
                toast.success("Product Added Succesfully")
            })
    }

    // STEP -2 (add in all input in onChange)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className='m-3 p-3'>
            <h1>
                Add Products
            </h1>

            <form onSubmit={addProduct}>
                <div class="form-row row" style={{ width: "300px" }}>
                    <div class="col-md-12 my-3 ">
                        <input type="text" name={"title"} value={form.title} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="Product Name" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="number" name={"price"} value={form.price} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="Price" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text" name={"description"} value={form.description} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="Description" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text" name={"image"} value={form.image} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="Image Path" />
                    </div>
                    <div class="col-md-12 my-3">
                        <input type="text" name={"category"} value={form.category} class="form-control"
                            onChange={(e) => handleChange(e)} placeholder="Category" />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default AddProducts