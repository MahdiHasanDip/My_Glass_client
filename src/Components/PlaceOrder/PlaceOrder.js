import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../Hooks/useFirebase';
import "./PlaceOrder.css"

const PlaceOrder = () => {
    const {id} = useParams();
    const {user} = useFirebase();
    
    
    const [allProducts , setAllProducts] = useState([])
    const [singleProduct , setSingleProduct] = useState({})
    
    useEffect(() => {
        fetch('https://secret-ocean-31277.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setAllProducts(data))
        
    }, [])
    
    useEffect(()=>{
        const matchedOne = allProducts.find(product=>product._id===id)
        setSingleProduct(matchedOne)
        
    },[allProducts])


    const handleAddToCart= () =>{
    
        console.log(user.email);
        const data = singleProduct;
        data.email = user.email;
        
        
       fetch('https://secret-ocean-31277.herokuapp.com/cart',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)           
                     
    })

    };
        return (
        <div>
        <div className="place-order">
        <div className="container">
             <img className="detail-img" src={singleProduct?.img} />
         </div>
         <div className="text-center mt-5 ">
             <h1>Name: {singleProduct?.name}</h1>
             <hr />
             <hr />
             
            <div > 
                <h4 className="text-center mt-5"> {singleProduct?.des}</h4>
            </div>
             {/* <Link to ='/myOrders'>  */}
             <button  onClick={handleAddToCart} className="mt-5 btn btn-secondary">Add To Cart</button>
              {/* </Link> */}
         </div>
     </div>
 </div>
    );
};

export default PlaceOrder;