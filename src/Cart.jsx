import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartTable from './CartTable';
import { useSelector } from 'react-redux'
import CartTable1 from './CartTable1';
import CartTable2 from './CartTable2';
import { useState } from 'react';

const Cart = () => {

    const [itemname,setName] = useState('');

    const infomatics = useSelector((store => store.cartreducer))
    const compo = infomatics.prod_name.map((e) => {
        // setName(e);
        return <CartTable key={e.id} element={e} />
    })
    const compo1 = infomatics.prod_rate.map((e) => {
        return <CartTable1 key={e.id} element={e} />
    })

    const compo2 = infomatics.prod_rate.map((e) => {
        return <CartTable2 key={e.id} element={itemname} />
    })

    return (
        <div style={{ padding: "50px" }}>
        <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Rate</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{compo}</td>
                    <td>{compo1}</td>
                    <td>{compo2}</td>
                    {/* <td style={{display:"flex",justifyContent:"center",backgroundColor:"#d1e7dd",padding:"50px"}}><button className='btn btn-danger'>Delete</button></td> */}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;
