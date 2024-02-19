import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
      }, []);

      const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://6566eb8364fcff8d730f4f4b.mockapi.io/api/Crud/${id}`,
        {
            name : name,
            email : email,
        })
        .then(() => {
            navigate("/read")
        })
        
      };
  return (
    <>
    
   <div className="container">
      <div className="row d-flex justify-content-center mt-3">
           <div className="col-md-5">

            <h2>Update</h2>

    <form>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control"
    value={name}
    onChange={(e) => setName(e.target.value)}
     />
  </div>

  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control"
    value={email}
     onChange={(e) => setEmail(e.target.value)}
     />
    
  </div>
 

 
  <button type="submit" className="btn btn-primary"
  onClick={handleUpdate}
   >update</button>
</form>

</div>
</div>
</div>
    </>
  )
}

export default Update