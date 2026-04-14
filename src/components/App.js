
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {

  let [cartItems, setCartItems] = useState([])

  let [name, setName] = useState('')
  let [price, setPrice] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    let obj = {
      name : name,
      price : price
    }
    setCartItems([...cartItems,obj])
    setName('')
    setPrice('')
  }

  console.log(cartItems)

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <form onSubmit={handleSubmit}>
        <label for='name' id="itemName">Item Name: </label>
        <input onChange={(e) => setName(e.target.value)} id="name" type="text" value={name}></input>
        <label for="pass" id="itemPrice">Item Price: </label>
        <input onChange={(e) => setPrice(e.target.value)} id="pass" type="number" value={price}></input>
        <button>Add Item</button>
      </form>
      <Child 
      cartItems = {cartItems}
      />
    </div>
  )
}

export default App
