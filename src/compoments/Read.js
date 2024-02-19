import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setdata] = useState([]);



    function getData() {
      axios.get("https://6566eb8364fcff8d730f4f4b.mockapi.io/api/Crud").then((res) => {
        console.log(res.data);
        setdata(res.data)
      })
    }

    function handleDelete(id){
      axios.delete(`https://6566eb8364fcff8d730f4f4b.mockapi.io/api/Crud/${id}`).then(() => {
        getData();
      });
    }

    const setToLocalStorage = (id,name,email) => {
     localStorage.setItem("id",id); 
     localStorage.setItem("name",name); 
     localStorage.setItem("email",email); 
    }

    useEffect(() => {
      getData();
     
    }, []);
    
   

  return (
    <>
    <h2>Read operations</h2>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData) => {
      return(
        <>
          <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
     
      <td>
        <Link to="/update"><button className='btn btn-success' onClick={() => setToLocalStorage(
          eachData.id,
          eachData.name,
          eachData.email

        )}>Edit</button></Link>
        </td>
      <td><button className='btn btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button></td>
    </tr>
    
  </tbody>
        </>
      )
    })
  }
</table>
    </>
  )
}

export default Read