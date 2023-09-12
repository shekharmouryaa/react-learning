import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
            <div class="card" >
                <img class="card-img-top" src="..." alt="Card  cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p href="#" class="btn btn-primary">Go somewhere</p>
                    <Link to={"https://getbootstrap.com/"} target="_blank" > BootStrap</Link>
                </div>
            </div>
            <div class="card" >
                <img class="card-img-top" src="..." alt="Card cap" />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p href="#" class="btn btn-primary">Go somewhere</p>
                </div>
                <Link to={"/thankyou"} > Thank you page</Link>
            </div>
        </div>
    )
}

export default Gallery