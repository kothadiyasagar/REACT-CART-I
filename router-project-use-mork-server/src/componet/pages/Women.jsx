import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import './Men.css'


const Women =()=>{
     const {FechData,fech}=useContext(AuthContext)
    let a=14
    let b=30
    useEffect(()=>{
        FechData(a,b)
    
    },[])
    console.log(fech)

    return(
        <>
           <div className="menmain">
           {fech.map((item,index,)=>{
            return(
                <>
                <div>
                <img src={item.image_url}/>
                <h3 style={ {textAlign:"center"}}>{item.name}</h3>
                <div style={{display:"flex" ,justifyContent:"space-around"}}>
                    <h4>{`Rs ${item.price}`}</h4>
                    <h4 style={{ textDecoration: "line-through"}}>{`Rs ${item.strikedoffprice}`}</h4>
                </div>
                </div>
               
                </>
          )
        })}
                </div>
       
        </>
    )
}

export default Women