import React from 'react'
import "./Product.css"

const Product = (props) => {
  const { img, name, price } = props

  return (
    <div className="productCard">
      <img
        src={img}
        className="productImg"
      />
      <div>
        Product Name: {name}
      </div>
      <div>
        Price: {price}
      </div>
    </div>
  )
}

export default Product