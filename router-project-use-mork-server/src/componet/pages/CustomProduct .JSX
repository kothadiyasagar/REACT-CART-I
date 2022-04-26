  import react from "react"
  import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
  const CustomProduct = ()=>{
    const { id } = useParams();
    console.log(id)
    const[details,setDatails]= useState([])
    useEffect(() => {
        const getData = async () => {
          let res = await fetch(`http://localhost:4000/mensData/${id}`);
          let resdata = await res.json();
    
        //   console.log(resdata);
         setDatails(resdata);
        };
        getData();
      }, []);
      console.log(details.name)
    return(
        <>
          <div style={{marginTop:"100px",marginLeft:"5%"}}>
              <img  style={{width:"200px",}}  src={details.image_url} />
              <h1>{details.name}</h1>
              <h3>Description:-</h3>
          <h4>{details.description}</h4>
          <h4> Rs{details.price}</h4>
              <button>Add to Card</button>
             

              
          </div>
        </>
    )
  }

  export default CustomProduct