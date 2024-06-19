import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartTable from './CartTable';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
// import CartTable1 from './CartTable1';
// import CartTable2 from './CartTable2';

const Cart = () => {
    const infomatics = useSelector(store => store.cartreducer);
    const dispatch = useDispatch();
    console.log(infomatics);
    const compo = infomatics.favitems.map((e) => {
        return (
            <tr>
                <td>{e.itemName}</td>
                <td>{e.itemPrice}</td>
                <button
                    onClick={() => {
                        dispatch({ type: "Delete_item", payload: e });
                    }}
                    style={{ width: "100%" }}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </tr>
        )
    })


    return (
        <div style={{ padding: "50px" }}>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{compo}</tbody>
            </table>
        </div>
    );
}

export default Cart;
