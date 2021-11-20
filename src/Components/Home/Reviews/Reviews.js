import React from 'react';
import { useState ,useEffect} from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import "./Reviews.css"

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    const [text, setText] = useState('');
    const [rate, setRate] = useState(0);
    const {user} =useAuth();



    // load review 
    useEffect(()=>{
        fetch('https://secret-ocean-31277.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    // post review 
    const { register, handleSubmit} = useForm();
      const onSubmit = data => {
          console.log(data)
          
          fetch('https://secret-ocean-31277.herokuapp.com/review',{
              method:'POST',
              headers:{
                  'content-type': 'application/json'
              },
              body: JSON.stringify(data)           
                           
          })        
         
        }
    return (
             <div>
                 <h1 className="orange pt-5">Review</h1>
                 <hr />
                {user.email&& 
                <div className="">
                <h3> 
                        Post Your review {reviews.length}
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-box">
                    <input {...register("Review", { required: true, maxLength: 200 })} placeholder="Review"/>               
                    <br />
                    <input type="number" {...register("Rating",  { min: 0, max: 5 })} placeholder="Rating"/>
                    <br />
                    </div>
                    <input className="btn btn-secondary mt-3 ps-5 pe-5" type="submit" />
                </form> 
            </div>}                
                                 
                     <div className="container">
                     <div className="row row-cols-1 row-cols-md-2 mt-5 g-5">
                         {reviews.map(review => 
                                  <div className="card text-dark bg-light mb-3 " >
                                  <div className="card-header">Rating {review.Rating}/5</div>
                                  <div className="card-body">
                                    <h5 className="card-title">  {review.Review}</h5>
                                     
                                  </div> 
                           </div> )}
                           </div>
                     </div>
     
     </div>
    );
};

export default Reviews;