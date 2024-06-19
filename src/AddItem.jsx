import React from 'react'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const AddItem = () => {

    const dispatch = useDispatch();
    const [name,setName] = useState ('');
    const [url,setUrl] = useState ('');
    const [price,setPrice] = useState ('');

    const information = {
        itemName : name,
        itemImage : url,
        itemPrice : price
    }

    const update = ()=>{
        alert("Data uploaded successfully!!");
        dispatch({type:'Upload',payload:information})
        console.log(information)
    }

    return (
        <div style={{padding:"50px"}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Image URL</label>
                    <input type="text" className="form-control" onChange={(e)=>{setUrl(e.target.value)}}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Rate</label>
                    <input type="text" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control"  />
                    <div id="emailHelp" className="form-text">Always keep your password secret.</div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Agree to <a href="">Terms & Conditions</a></label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={update} >Upload</button>
            </form>

        </div>
    )
}

export default AddItem;
