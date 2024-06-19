import React from 'react'

const Hometemp = (Props) => {
    return (
        <div style={{padding:"40px",display:"flex"}}>
            <div className="card" style={{ width: '18rem' }}>
                <img src={Props.element.itemImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Props.element.itemName}</h5>
                    <h5 className="card-title">{Props.element.itemPrice}</h5>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>

    )
}

export default Hometemp
