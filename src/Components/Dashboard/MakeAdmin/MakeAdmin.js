import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [adminAdded, setAdminAdded] = useState(false);

    const handleEmail = e =>{
    setEmail(e.target.value);
    };

    const handleSubmit = e =>{ 
        const user = {email} ;      
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)              
                         
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
            console.log(data)
            setAdminAdded(true);
            setEmail("")
            }
        })

        e.preventDefault();
    };


    return (
        <div>
            <h1>Make An Admin Here</h1>
            <form onSubmit={handleSubmit} >
            <input className="m-1 p-1 pe-5" onBlur={handleEmail} type="Email" placeholder="Email" />
            <input className="btn btn-outline-success" type="submit" value="Submit" />
            </form>
            {
                adminAdded
                &&
                <div className="alert alert-success" role="alert">
                Admin Made Successfully
               </div>
            }
        </div>
    );
};

export default MakeAdmin;