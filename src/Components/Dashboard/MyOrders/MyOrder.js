import React, { useState ,useEffect} from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const MyOrder = () => {
    const {user} = useAuth();
    const email = user.email
    const [orders, setOrders] = useState([])


// load API 
    useEffect(() =>{
        fetch(`https://secret-ocean-31277.herokuapp.com/myorders/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[email])

// console.log(orders);
// Delete data
const handleDelete = id => {

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
                    <h1>My All orders</h1>   
                     <hr />
               <div>
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
                                    orders?.map(order => (
                                        <tr key={order?._id}>
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
        </div>
    );
};

export default MyOrder;