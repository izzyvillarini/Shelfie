import React from 'react'
import "./Form.css"
import axios from 'axios'

class Form extends React.Component {
  constructor (props) {
    super(props)
  
    this.state = {
      img: '',
      name: '',
      price: 0,
    }

    this.postProduct = this.postProduct.bind(this)
  }

// Handler Functions for Inputs
  handleChangeImg = (e) => {
    this.setState({
      img: e.target.value
    })
  }
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value
    })
  }

  postProduct (name, price, img) {
    axios
      .post('/api/product', { name, price, img })
      .then(() => this.props.getProducts())
      .catch(err => console.log(err))
  }

  clearInput = () => {
    console.log(this.props)
    this.setState({
      img: '',
      name: '',
      price: 0,
    })
  }

  render () {
    return (
      <div className="formInput">
        <h1>
          Form
        </h1>
        <div>
          <img
            src=
            className="inputImg"
          />
          <input
            className="imgUrlInput"
            onChange={this.handleChangeImg}
            placeholder="Image URL"
          />
          <input
            className="nameInput"
            onChange={this.handleChangeName}
            placeholder="Product Name"
          />
          <input
            type='number'
            className="priceInput"
            onChange={this.handleChangePrice}
            placeholder="Product Price"
          />
        </div>
        <div className="buttons">
          <button
            className="cancelButton"
            onClick={() => {this.clearInput()}}
          >
            Cancel
          </button>
          <button
            className="addButton"
            onClick={() => {this.postProduct(this.state.name, this.state.price, this.state.img)}}
          >
            Add to Inventory
          </button>
        </div>
    </div>
    )
  }
}

export default Form





    render(){
        console.log(this.state)
        console.log(this.handleChangeName.newName)
        return(
            <div>
                <div>Form</div>
                <h2>Image URL:</h2>
                <input onChange={(e) => this.handleChangeURL(e.target.value)}></input>
                <h2>Name:</h2>
                <input type='Text' onChange={(e) => this.handleChangeName(e.target.value)}></input>
                <h2>Price:</h2>
                <input onChange={(e) => this.handleChangePrice(+e.target.value)}></input>
                <button onClick={() => this.cancel()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}