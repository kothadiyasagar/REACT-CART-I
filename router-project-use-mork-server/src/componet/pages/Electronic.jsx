import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContexProvider";
import './Electronic.css'


const Electronic =()=>{
     const {FechData,fech}=useContext(AuthContext)
    let h=30
    let i=41
    useEffect(()=>{
        FechData(h,i)
    
    },[])
    console.log(fech)

    return(
        <>
           <div className="menmain">
           {fech.map((item,index,)=>{
            return(
                <>
                <div>
                <img className="img2" src={item.image_url}/>
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

export default Electronic