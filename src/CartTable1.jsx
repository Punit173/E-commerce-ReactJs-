import React from 'react'


const CartTable1 = (Props) => {

  return (
    <div style={{ padding: "50px" }}>
            <table className="table table-success table-striped">
                <tbody>
                    <td>{Props.element}</td>
                    
                </tbody>
            </table>
        </div>
  )
}

export default CartTable1
