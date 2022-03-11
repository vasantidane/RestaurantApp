import React from 'react'
import './style.css'
import Menu from './menuApi.js'

const Restaurant = () => {
  return (
    <>
        <div className="card-container">
            <div className = "card">
                <div className="card-body">
                <span className ="card-number card-circle subtle">1</span>
                <span className ="card-author subtle">Breakfast</span>
                <h2 className="card-title">Maggi</h2>
                <span className="card-description subtle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi reprehenderit nisi voluptatem mollitia, eaque blanditiis inventore soluta dolorum earum doloremque perspiciatis quaerat, optio architecto amet.
                </span>
                <div className='card-read'>Read more</div>
                <img src={"./images/maggie.jpg"} alt="ImgName" className="card-media"></img>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Restaurant