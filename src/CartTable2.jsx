import React from 'react'
import { useDispatch } from 'react-redux'


const CartTable2 = (Props) => {

    const dispatch = useDispatch();

    const update = ()=>{
        alert("Item deleted from cart successfully!!");
        console.log(Props.itemname);
        dispatch({type:"Delete_item",payload:Props.itemname})
    }

  return (
    <div style={{ padding: "41px" }}>
            <table className="table table-success table-striped">
                <tbody>
                    <td><button onClick={update} className='btn btn-danger'>Delete</button></td>
                    
                </tbody>
            </table>
        </div>
  )
}

export default CartTable2
