import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='text-center'>
      <h1>{"CRUD Operation App"}</h1>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/" ><strong>Home</strong></Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/about" ><strong>About</strong></Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/gallery" ><strong>Gallery</strong></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
