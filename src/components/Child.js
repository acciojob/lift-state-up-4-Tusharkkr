import React from "react";

let Child = ({cartItems}) => {

    function handleClick(e){
        e.preventDefault()
        e.target.parentElement.remove()
    }

    return (
        <div className="child">
            <h2>Child Component</h2>
            <ul>
            {cartItems.map(value => (
                <li>{value.name} - ${value.price} <button onClick={handleClick}>Remove</button></li>
            ))}
            </ul>
        </div>
    )
}

export default Child