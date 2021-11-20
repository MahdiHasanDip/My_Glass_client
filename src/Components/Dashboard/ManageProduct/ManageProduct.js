import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://secret-ocean-31277.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[products.length])

// Delete Service 
    const handleDelete = (id) =>{

   const confirmation = window.confirm('Are you sure,want to delete?');
     if(confirmation){
                    // console.log(id);
                    fetch(`https://secret-ocean-31277.herokuapp.com/product/${id}`,{
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
                <h1>All Services</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th> 
                        <th scope="col">Action</th>                    
                    </tr>
                </thead>
            <tbody>
                {
                products.map(product => (
                        <tr key={product._id}>
                            <th scope="row">#</th>
                                <td><h3>{product.name}</h3></td>
                                <td>{product.price}</td>
                                <td><button className="btn btn-danger" onClick={()=>handleDelete(product._id)}>Delete</button></td>
                        </tr>
                ))
                }
            </tbody>
            </table>

        </div>
    );
};

export default ManageProduct;