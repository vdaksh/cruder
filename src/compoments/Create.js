import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Create = () => {


   const [name, setname] = useState("")
   const [email, setemail] = useState("");
   const history = useNavigate();
   const header = {"Access-Control-Allow-Origin": "*"};

   const handlesubmit = (e) => {

      e.preventDefault();
      console.log("clicked");
       axios.post(
       " https://6566eb8364fcff8d730f4f4b.mockapi.io/api/Crud",{
        name: name,
        email: email,
        header,
       }
       )
      .then(() => {
        history("/read");
      });
   };

  return (
    <>

   <div className="container">
      <div className="row d-flex justify-content-center mt-3">
           <div className="col-md-5">

            <h2>create</h2>

    <form>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e) => setname(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e) => setemail(e.target.value)}/>
    
  </div>
 

 
  <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>

</div>
</div>
</div>
    </>
  )
}

export default Create