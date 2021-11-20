import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://secret-ocean-31277.herokuapp.com/cart')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

// // Delete Service 
    const handleDelete = (id) =>{

   const confirmation = window.confirm('Are you sure,want to delete?');
     if(confirmation){
                    // console.log(id);
                    fetch(`https://secret-ocean-31277.herokuapp.com/cart/${id}`,{
                        method:'DELETE'
                    })
                    .then(res => res.json())
                    .then(data =>{
                        if (data.deletedCount>0){
                            alert("Service Deleted")
                        }
                    })
                }

    }
    return (
        <div>
            <h1>All Products</h1>

            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th> 
                    <th scope="col">Action</th>                    
                </tr>
            </thead>
            <tbody>
            {
              orders.map(order => (
                    <tr key={orders._id}>
                        <th scope="row">#</th>
                        <td><h3>{order?.name}</h3></td>
                        <td>{order?.price}</td>
                        <td><button className="btn btn-danger" onClick={()=>handleDelete(order?._id)}>Delete</button></td>
                    </tr>
              ))
            }
            </tbody>
            </table>

        </div>
    );
};

export default ManageOrder;