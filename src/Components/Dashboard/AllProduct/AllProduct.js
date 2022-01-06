import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllProduct = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch("https://secret-ocean-31277.herokuapp.com/product")
        .then(res => res.json())
        .then(data => setProducts(data));
    })
    return (
        <div>
            <div >
                <img className="img-fluid" src="https://i.ibb.co/Tg2Zk8R/My-2.png" alt="" />
            </div>
            <h1 className="mb-5">Our Products</h1>
            <hr />


            <div className="container ">
             <div className="row">
                 {
                   products.map(product => (
                       <div className="col-lg-4">
                          <div className="card m-3 pt-3 card-body card-border">
                                <div className="img-container img-fluid  ms-3 ">
                                     <img src={product.img} alt="" />                                     
                                </div>
                                <div className="des p-3">
                                    <h5>product Name</h5>
                                      <h1>{product.name}</h1>
                                      <h4>Cost: {product.price} taka</h4>
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

export default AllProduct;