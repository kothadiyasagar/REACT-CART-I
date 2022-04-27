import React, { useContext, useEffect,useState } from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import styled from "styled-components";
import './Electronic.css'
export const Grid = styled.div`
 display: grid;
 margin-top:120px;
 grid-template-columns: repeat(4, 1fr);
 gap:30px;
 boder:1px soild black
`;
const  Card =()=>{
    const {Add,add}=useContext(AuthContext)
    const [totals , setTotal]=useState(0)
    console.log(add)
    //   const totalValue = add.reduce((sum, number) => sum + number.price);
    //   console.log(totalValue)
         function Total(){
      let total=add.reduce(function(acc,elem ,index){
        let myString = parseInt(elem.price);
            return acc+(myString)
    
         },0);
         console.log(total)
         setTotal(total)
          }

          useEffect(()=>{
        Total()
            
          },[add],[])
          
       
     
    return(
        <>
        <div style={{marginTop:"100px"}}><h1>{`total:-${totals}`}</h1></div>
       <Grid>
        {add.map((item)=>{
         return(
                  <div>
                  <img className="img2" src={item.image_url}/>
             <h3>{item.name}</h3>
             <h4> Rs {item.price}</h4>
                  </div>
         )
       })}
       </Grid>
        
   
        </>
    )
}

export default Card