import React from 'react'
import { useDispatch } from 'react-redux'


const Hometemp = (Props) => {

    const dispatch = useDispatch();
    // console.log(Props.element)

    function addcart() {
        dispatch({ type: "Add_cart", payload: Props.element})
        alert("Added successfully!!")
    }

    return (
        <div style={{ padding: "40px", display: "flex" }}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={Props.element.itemImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Props.element.itemName}</h5>
                    <h5 className="card-title">{Props.element.itemPrice}</h5>
                    <a href="#" className="btn btn-primary" onClick={addcart}>Add to Cart</a>
                </div>
            </div>
        </div>

    )
}

export default Hometemp
