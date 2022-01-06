import React from 'react';
import { useForm } from "react-hook-form";



const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
      const onSubmit = data => {
          
          fetch('https://secret-ocean-31277.herokuapp.com/product',{
              method:'POST',
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(data)              
                           
          })
         
         
        }
    return (
        <div className="form">

            <h1>Add A service Here</h1>            
            <br /><hr />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <br />
                <input {...register("des")} placeholder="Description"/>
                <br />
                <input {...register("img")} placeholder="Image link" />
                <br />
                <input type="number" {...register("price")} placeholder="Price"/>
                <br />
                </div>
                <input className="btn btn-secondary mt-3 ps-5 pe-5" type="submit" />
                </form> 
            </div>
         </div>
        
    );
};

export default AddProduct;