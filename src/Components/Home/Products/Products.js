import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'


const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://secret-ocean-31277.herokuapp.com/product")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    
   const newProducts = products.slice(0, 6);



    console.log(newProducts);
    return (
        <div>
           <h1 className="mt-5">Our <span className="orange">Products</span> </h1> 
            <br />
            <hr />


            <div className="container mt-5 ">
             <div className="row ">
                 {
                   newProducts.map(product => (
                       <div key={product._id} className="col-lg-4 ">
                          <div className="card m-3 pt-3 card-body card-border">
                                <div className="img-container img-fluid  ms-3 ">
                                     <img src={product.img} alt="" />                                     
                                </div>
                                <div className=" p-3">
                                    <h5>product Name</h5>
                                      <h1>{product.name}</h1>
                                      <h4>Price: {product.price} taka</h4>
                                    <Link to={`/placeOrder/${product._id}`}>
                                    <button className="order-btn">Order Now</button>
                                    </Link>
                                </div>
                            </div>
                         </div>
                       
                     ))
                 }
              </div>
            </div>
        </div>
    );
};

export default Products;